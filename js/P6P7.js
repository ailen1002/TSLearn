"use strict";
//1、ts中类的定义
/*
es5中定义类：
    function Person(name) {
        this.name = name;
        this.run = function() {
            console.log(this.name);
        }
    }
    var p = new Person('张三');
    p.run();

*/
/*
ts中定义类：
    class Person {
        name:string; //属性  前面省略了public关键词

        constructor(n:string) {  //构造函数  实例化类的时候出发的方法
            this.name = n;
        }

        run():void {
            alert(this.name);
        }
    }

    var p = new Person('张三');
    p.run();


    class Person {
        name:string;

        constructor(name:string) {  //构造函数  实例化类的时候出发的方法
            this.name = name;
        }

        getName():string {
            return this.name;
        }

        setName(name:string):void {
            this.name = name
        }
    }

    var p = new Person('张三');
    alert(p.getName());

    p.setName('李四')

    alert(p.getName());
*/
//2、ts中实现继承  extends 、 super
// class Person {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五')
// // alert(p.run())
// class Web extends Person {
//     constructor(name:string) {
//         super(name);  /*初始化父类构造函数*/
//     }
// }
// var w = new Web('李四');
// alert(w.run());
//ts中继承的探讨  父类的方法和子类的方法一致
// class Person {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五')
// // alert(p.run())
// class Web extends Person {
//     constructor(name:string) {
//         super(name);  /*初始化父类构造函数*/
//     }
//     run():string {
//         return `${this.name}在运动--子类`
//     }
//     work() {
//         alert(`${this.name}在工作`)
//     }
// }
// var w = new Web('李四');
// alert(w.run());
// // w.work();
//3、类里面的修饰符  typescript里面定义属性的时候给我们提供了 三种修饰符
/*
    public:      公有：在类里面、子类里面、类外面都可以访问
    protected:   保护类型：在类里面、子类里面可以访问，在类外部没法我访问
    private:     私有：在类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符，默认就是公有（public）
*/
//public:      公有：在类里面、子类里面、类外面都可以访问
// class Person {
//     public name:string;  /*公有属性*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五')
// // alert(p.run())
// class Web extends Person {
//     constructor(name:string) {
//         super(name);  /*初始化父类构造函数*/
//     }
//     run():string {
//         return `${this.name}在运动--子类`
//     }
//     work() {
//         alert(`${this.name}在工作`)
//     }
// }
// var w = new Web('李四');
// alert(w.run());
//类外部访问公有属性
// class Person {
//     public name:string;  /*公有属性*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// var p = new Person('哈哈哈');
// alert(p.name);
//protected:   保护类型：在类里面、子类里面可以访问，在类外部没法我访问
// class Person {
//     protected name:string;  /*保护属性*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// class Web extends Person {
//     constructor(name:string) {
//         super(name);  /*初始化父类构造函数*/
//     }
//     work() {
//         alert(`${this.name}在工作`)
//     }
// }
// var w = new Web('李四');
// alert(w.run());
//类外部没法访问保护类型属性
// class Person {
//     protected name:string;  /*保护类型*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// var p = new Person('哈哈哈');
// alert(p.name);
//private:     私有：在类里面可以访问，子类、类外部都没法访问
// class Person {
//     private name:string;  /*私有属性*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// class Web extends Person {
//     constructor(name:string) {
//         super(name);  /*初始化父类构造函数*/
//     }
//     work() {
//         alert(`${this.name}在工作`)
//     }
// }
// var w = new Web('李四');
// alert(w.run());
//类外部没法访问保护类型属性
// class Person {
//     privte name:string;  /*私有属性*/
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return `${this.name}在运动`
//     }
// }
// var p = new Person('哈哈哈');
// alert(p.name);
//静态属性  静态方法
/*
    function Person() {
        this.run1 = function() {

        }
    }
    Person.name = '哈哈哈';
    Person.run2 = function() {  //静态方法

    }
    var p = new Person();
    Person.run2();  //静态方法调用
*/
/*
    function $(element) {
        return new Base(element);
    }

    $get = function() {

    }

    function Base(element) {
        this.element = 获取dom节点;
        this.css = function(arr,value) {
            this.element.style.arr = value;
        }
    }

    $('#box').css('color','red')

    $.get('url',function(){

    })
*/
/*
    class Person {
            public name:string;
            public age:number = 20;
            static sex:string = '男';  //静态属性
            constructor(name:string) {
                this.name = name;
            }
            run() {  //实例方法
                alert(`${this.name}在运动`);
            }
            work() {
                alert(`${this.name}在工作`);
            }
            static print() {  //静态方法  里面没法调用类里面的属性  但是可以调用静态属性
                alert(`print方法${this.sex}`);
            }
        }
        Person.print();
        alert(Person.sex);
*/
//多态：父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
