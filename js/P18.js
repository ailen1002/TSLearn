"use strict";
/*
    命名空间：
        在代码量较大的情况下，为了避免各种变量命名相冲突，可以将相似功能的函数、类、接口等放置到命名空间内
        同Java包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来
        只对外暴露需要外部访问的对象。命名空间内的对象通过export导出
    命名空间和模块的区别：
        命名空间：内部模块，主要用于组织代码，避免命名冲突。
        模   块：ts的外部模块简称，侧重代码的复用，一个模块里可能会有多个命名空间。
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log('吃的方法');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.eat = function () {
            return this.name + "\u5403\u9AA8\u5934";
        };
        return Dog;
    }(Animal));
    A.Dog = Dog;
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function () {
            return this.name + "\u5403\u5C0F\u9C7C";
        };
        return Cat;
    }(Animal));
    A.Cat = Cat;
})(A || (A = {}));
var B;
(function (B) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log('吃的方法');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.eat = function () {
            return this.name + "\u5403\u9AA8\u5934";
        };
        return Dog;
    }(Animal));
    B.Dog = Dog;
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function () {
            return this.name + "\u5403\u5C0F\u9C7C";
        };
        return Cat;
    }(Animal));
    B.Cat = Cat;
})(B || (B = {}));
var d = new A.Dog('狼狗');
d.eat();
var c = new B.Cat('小花');
console.log(c.eat());
