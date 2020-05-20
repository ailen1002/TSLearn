"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var db1_1 = require("../modules/db1");
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db1_1.MssqlDb();
exports.UserModel = UserModel;
