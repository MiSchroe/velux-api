"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const tls_1 = require("tls");
const KLF200SocketProtocol_1 = require("./KLF200-API/KLF200SocketProtocol");
const common_1 = require("./KLF200-API/common");
const GW_PASSWORD_ENTER_REQ_1 = require("./KLF200-API/GW_PASSWORD_ENTER_REQ");
const path_1 = require("path");
'use strict';
const FINGERPRINT = "02:8C:23:A0:89:2B:62:98:C4:99:00:5B:D2:E7:2E:0A:70:3D:71:6A";
const ca = fs_1.readFileSync(path_1.join(__dirname, "../velux-cert.pem"));
class connection {
    constructor(host, CA = ca, fingerprint = FINGERPRINT) {
        this.host = host;
        this.CA = CA;
        this.fingerprint = fingerprint;
    }
    loginAsync(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initSocket();
            this.klfProtocol = new KLF200SocketProtocol_1.KLF200SocketProtocol(this.sckt);
            const passwordCFM = yield this.sendFrame(new GW_PASSWORD_ENTER_REQ_1.GW_PASSWORD_ENTER_REQ(password));
            if (passwordCFM.Status !== common_1.GW_COMMON_STATUS.SUCCESS) {
                return Promise.reject("Login failed.");
            }
            else {
                return Promise.resolve();
            }
        });
    }
    logoutAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.sckt) {
                if (this.klfProtocol) {
                    this.klfProtocol = undefined;
                }
                return new Promise((resolve) => {
                    // Close socket
                    this.sckt.once("close", () => {
                        this.sckt = undefined;
                        resolve();
                    }).end();
                });
            }
            else {
                return Promise.resolve();
            }
        });
    }
    sendFrame(frame) {
        return __awaiter(this, void 0, void 0, function* () {
            const frameName = common_1.GatewayCommand[frame.Command];
            const expectedConfirmationFrameName = frameName.slice(0, -3) + "CFM";
            const expectedConfirmationFrameCommand = common_1.GatewayCommand[expectedConfirmationFrameName];
            return new Promise((resolve, reject) => {
                const cfmHandler = this.klfProtocol.on((frame) => {
                    if (frame.Command === common_1.GatewayCommand.GW_ERROR_NTF) {
                        cfmHandler.dispose();
                        reject(frame.ErrorNumber);
                    }
                    else if (frame.Command === expectedConfirmationFrameCommand) {
                        cfmHandler.dispose();
                        resolve(frame);
                    }
                });
                this.klfProtocol.write(frame.Data);
            });
        });
    }
    initSocket() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.sckt === undefined) {
                return new Promise((resolve, reject) => {
                    this.sckt = tls_1.connect(common_1.KLF200_PORT, this.host, {
                        rejectUnauthorized: true,
                        ca: [this.CA],
                        checkServerIdentity: (host, cert) => this.checkServerIdentity(host, cert)
                    }, () => {
                        // Callback on event "secureConnect":
                        // Resolve promise if connection is authorized, otherwise reject it.
                        if (this.sckt.authorized) {
                            resolve();
                        }
                        else {
                            const err = this.sckt.authorizationError;
                            this.sckt = undefined;
                            reject(err);
                        }
                    });
                });
            }
            else {
                return Promise.resolve();
            }
        });
    }
    checkServerIdentity(host, cert) {
        if (cert.fingerprint === this.fingerprint)
            return undefined;
        else
            return tls_1.checkServerIdentity(host, cert);
    }
}
exports.connection = connection;
// /**
//  * Creates a new connection object that connect to the given host.
//  * @param {string} host URL of the host name, e.g. http://velux-klf-12ab
//  * @constructor
//  * @description
//  * The connection class is used to handle the communication with the Velux KLF interface.
//  * It provides login and logout functionality and provides methods to run other commands
//  * on the REST API.
//  * @example
//  * const connection = require('velux-api').connection;
//  *
//  * let conn = new connection('http://velux-klf-12ab');
//  * conn.loginAsync('velux123')
//  *     .then(() => {
//  *         ... do some other stuff ...
//  *         return conn.logoutAsync();
//  *      })
//  *     .catch((err) => {    // always close the connection
//  *         return conn.logoutAsync().reject(err);
//  *      });
//  */
// function connection(host) {
//     this.host = host;
// }
// /**
//  * Logs in to the KLF interface and provides a token for further calls to the REST API.
//  * @param {string} password The password needed for login. The factory default password is velux123.
//  * @return {Promise} Returns a promise that resolves to true on success or rejects with the errors.
//  */
// connection.prototype.loginAsync = function (password) {
//     if (this.token)
//         delete this.token;
//     return this.postAsync(urlBuilder.authentication, 'login', { password: password })
//         .then((res) => {
//             if (res.token)
//                 this.token = res.token;
//             else
//                 throw new Error('No login token found');
//             return true;
//         });
// };
// /**
//  * Logs out from the KLF interface.
//  * @return {Promise} Returns a promise that resolves to true on successful logout or rejects with the errors.
//  */
// connection.prototype.logoutAsync = function () {
//     return this.postAsync(urlBuilder.authentication, 'logout').then(() => {
//         if (this.token)
//             delete this.token;
//         return true;
//     });
// };
// /**
//  * Calls a REST API function on the KLF interface.
//  * @param {string} functionName The name of the function interface, e.g. auth or products.
//  *                              You can use {@link urlBuilder} to get the valid function names.
//  * @param {string} action The name of the action, e.g. login, logout.
//  * @param {object} [params] The parameter data for your action, e.g. the password needed for login.
//  * @return {Promise} Returns a promise that resolves to the result of the http request.
//  */
// connection.prototype.postAsync = function (functionName, action, params = null) {
//     try {
//         let data = {
//             action: action,
//             params: params || {}
//         };
//         let req = request.post(this.host + urlBuilder.getPath(functionName));
//         // Add authorization token
//         if (this.token) {
//             req = req.auth(this.token, { type: 'bearer' });
//         }
//         return Promise.resolve(
//             req
//             .parse(this.cleanJSONParse)
//             .send(data)
//             .then((res) => {
//                 if (!res || !res.body || !res.body.result ||
//                     res.body.errors && Array.isArray(res.body.errors) && res.body.errors.length > 0)
//                     throw new Error(res.body.errors);
//                 else
//                     return res.body;
//             })
//         );
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };
// /**
//  * @callback superAgentParserCallback
//  * @param {Error} err
//  * @param {any} body
//  */
// /**
//  * Cleans the http-response from invalid characters and returns a JSON object.
//  * Is implemented as a parser for {@link superagent}.
//  * @internal
//  * @param {SuperAgentStatic.response} res The response object.
//  * @param {superAgentParserCallback} fn The callback function called by the parser.
//  */
// connection.prototype.cleanJSONParse = function (res, fn) {
//     res.text = '';
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) { res.text += chunk; });
//     res.on('end', function () {
//         try {
//             let responseBody = res.text;
//             let startPositionOfJSONObject = responseBody.indexOf('{');
//             if (startPositionOfJSONObject > 0)
//                 responseBody = responseBody.substring(startPositionOfJSONObject);
//             fn(null, JSON.parse(responseBody));
//         } catch (err) {
//             fn(err);
//         }
//     });
// };
// module.exports = connection;
//# sourceMappingURL=connection.js.map