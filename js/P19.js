"use strict";
/*
    装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法、属性或参数上，可以修改类的行为。
    通俗的将装饰器就是一个方法，可以注入到类、方法、属性、参数上来扩展类、属性、方法、参数的功能。
    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
    装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
    装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一
*/
//1、类装饰器：类装饰器在类声明前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数
//普通装饰器
/*
    function logClass(params:any) {
        console.log(params);
        // params 就是当前类
        params.prototype.apiUrl='我是一个扩展的属性';
        params.prototype.run = function() {
            console.log('我是一个run方法');
        }
    }

    @logClass
    class HttpClient {
        [x: string]: any;
        constructor() {
        }
        getData() {
        }
    }
    var http = new HttpClient();
    console.log(http.apiUrl);
    http.run();
*/
//装饰器工厂(可传参)
/*
    function logClass(params:string) {
        return function(target:any) {
            console.log(params);
            console.log(target);
            target.prototype.apiUrl = params;
        }
    }

    @logClass('http://www.itying.com/api')
    class HttpClient {
        [x: string]: any;
        constructor() {
        }
        getData() {
        }
    }
    var http = new HttpClient();
    console.log(http.apiUrl);
*/
/*
    下面是一个重载构造函数的例子
    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
/*
    function logClass(target:any) {
        console.log(target);
        return class extends target {
            apiUrl = '我是修改后的数据';
            getData() {
                this.apiUrl =`${this.apiUrl}----`
                console.log(this.apiUrl)
            }
        }
    }

    @logClass
    class HttpClient {
        public apiUrl:string | undefined
        constructor() {
            this.apiUrl = '我是构造函数里面的apiurl';
        }
        getData() {
            console.log(this.apiUrl)
        }
    }
    var http = new HttpClient();
    http.getData();
*/
/*
    2、属性装饰器
        属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
            2、成员名字
*/
/*
    //类装饰器
    function logClass(params:string) {
        return function(target:any) {
            // console.log(target);
            // console.log(params);
            target.prototype.apiUrl = params;
        }
    }
    //属性装饰器
    function logProperty(params:any) {
        return function(target:any,attr:any) {
            console.log(target);
            console.log(attr);
            target[attr] = params;
        }
    }

    @logClass('xxxxxx')
    class HttpClient {
        @logProperty('http://www.itying.com/api')
        public url:any|undefined;
        [x: string]: any;
        constructor() {
        }
        getData() {
            console.log(this.url);
        }
    }
    var http = new HttpClient();
    http.getData();

*/
