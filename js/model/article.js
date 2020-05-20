"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.ArticleClass = void 0;
var db1_1 = require("../modules/db1");
var ArticleClass = /** @class */ (function () {
    function ArticleClass() {
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
var ArticleModel = new db1_1.MssqlDb();
exports.ArticleModel = ArticleModel;
