'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class GW_PASSWORD_ENTER_CFM extends common_1.GW_FRAME_CFM {
    constructor(Data) {
        super(Data);
        const status = this.Data.readUInt8(0);
        this.Status = status;
    }
}
exports.GW_PASSWORD_ENTER_CFM = GW_PASSWORD_ENTER_CFM;
//# sourceMappingURL=GW_PASSWORD_ENTER_CFM.js.map