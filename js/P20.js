"use strict";
/*
    3、方法装饰器
        它会被应用到方法的属性描述符上，可用来监视，修改或者替换方法定义。
        
        方法装饰器会在运行时传入下列三个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、成员名字
            3、成员的属性描述符
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//方法装饰器
/*
    function get(params:any) {
        return function(target:any,methodName:any,desc:any) {
            console.log(target);
            console.log(methodName);
            console.log(desc);
            target.apiurl = 'xxxx';
            target.run = function() {
                console.log('这是扩展的run方法')
            }
        }
    }

    class HttpClient {
        public url:any | undefined;
        constructor() {

        }
        @get('http://www.itying.com')
        getData() {
            console.log(this.url);
        }
    }
    var http = new HttpClient();
    console.log(http.url);
    http.run();
*/
/*
    function get(params:any) {
    return function(target:any,methodName:any,desc:any) {
        console.log(target);
        console.log(methodName);
        console.log(desc.value);

            //修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型
            //1、保存当前方法
            var oMethod = desc.value;
            desc.value = function(...args:any[]) {
                args = args.map((value) => {
                    return String(value);
                })
                console.log(args);
                oMethod.apply(this,args);
            }
        }
    }

    class HttpClient {
        public url:any | undefined;
        constructor() {

        }
        @get('http://www.itying.com')
        getData() {
            console.log('我是getData里面的方法');
        }
    }
    var http:any = new HttpClient();
    http.getData(123,'xxx')
*/
/*
    4、方法参数装饰器
        参数装饰器表达式会在运行时当作函数被调用，可以适应参数装饰器为类的原型增加一些元素数据，传入下列是三个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、方法的名称
            3、参数在函数参数列表中的索引
*/
/*
    function logParams(params:any) {
        return function(target:any,methodName:any,paramsIndex:any) {
            console.log(params);
            console.log(target);
            console.log(methodName);
            console.log(paramsIndex);
            target.apiurl = params;
        }
    }

    class HttpClient {
        public url:any | undefined;
        constructor() {

        }
        getData(@logParams('xxxxxx')uuid:any) {
            console.log(uuid);
        }
    }
    var http:any = new HttpClient();
    http.getData(123456);
    console.log(http.apiurl);

*/
//装饰器执行的顺序
//属性》方法》方法参数》类
//如果有多个同样的装饰器，它会先执行后面的。从后向前执行。
function logClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log('属性装饰器');
    };
}
function logmethod(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器');
    };
}
function logParams1(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器1');
    };
}
function logParams2(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器2');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        return true;
    };
    HttpClient.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "apiUrl", void 0);
    __decorate([
        logmethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1('http://www/itying.com/api'),
        logClass2('xxxxxx')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
