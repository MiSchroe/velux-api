﻿'use strict';

const URL = require('url');

// Defining constants for the KLF-200 REST-API
const API = '/api/v1/';

/**
 * Defines the supported functions for the KLF REST-API.
 * @enum {string}
 * @private
 */
const functionNames = {
    /** Use for login and logout */
    authentication: 'auth',
    device: 'device',
    scenes: 'scenes',
    products: 'products'
};

const validFunctionNames = [];
Object.getOwnPropertyNames(functionNames).forEach((value, index, array) => {
    validFunctionNames.push(functionNames[value]);
});

/**
 * Helper functions to build the URL paths.
 * @constructor
 */
function urlBuilder() { }

/** Use as [functionName]{@link urlBuilder#getPath~functionName} parameter in the [getPath]{@link urlBuilder#getPath} method for login and logout */
urlBuilder.prototype.authentication = functionNames.authentication;
/** Use for the KLF interface status */
urlBuilder.prototype.device = functionNames.device;
/** Use for getting or running scenes */
urlBuilder.prototype.scenes = functionNames.scenes;
/** Use for getting a list of the products */
urlBuilder.prototype.products = functionNames.products;

//urlBuilder.prototype.getAPIUrl = function (host, functionName) {
//    if (!host)
//        throw new RangeError('Parameter \'host\' must not be empty.');

//    if (!functionName)
//        throw new RangeError('Parameter \'functionName\' must not be empty.');

//    let url = URL.parse(host);
//    url.pathname = API + functionName;
//    return URL;
//}

/**
* Returns the path to use in the http.request method.
* @method
* @param {string} functionName The function you want to use in your call. Use on of [urlBuilder.authentication]{@link urlBuilder#authentication}, [urlBuilder.device]{@link urlBuilder#device}, [urlBuilder.scenes]{@link urlBuilder#scenes} or [urlBuilder.products]{@link urlBuilder#products}
* @returns {string} Returns the path to use in the http.request method.
*/
urlBuilder.prototype.getPath = function (functionName) {
    if (!functionName)
        throw new RangeError('Parameter \'functionName\' must not be empty.');

    if (!validFunctionNames.some((value) => { return value === functionName; }))
        throw new RangeError('Function "' + functionName.toString() + '" not supported.');

    return API + functionName;
};

module.exports = new urlBuilder();
