"use strict";
//可索引接口：数组、对象的约束  （不常用）
//ts定义数组的方法
/*
    var arr:number[] = [242,23123]
    var arr1:Array<string> = ['111','222']
*/
//可索引接口  对数组的约束
/*
    interface UserArr {
        [index:number]:string
    }
    // var arr:UserArr = [123,'sdad'];  //错误
    var arr:UserArr = ['13213','321312'];

    console.log(arr[0]);
*/
//可索引接口  对对象的约束
/*
    interface UserObj {
        [index:string]:string
    }

    // var arr:UserObj = {name:'zhangsan',age:20}  //错误
    var arr1:UserObj = {name:'zhangsan'}  //正确
*/
//类类型接口：对类的约束  和  抽象类有点类似
/*
    interface Animal {
        name:string;
        eat(str:string):void;
    }
    class Dog implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name
        }
        eat() {
            console.log(`${this.name}吃骨头`);
        }
    }
    var d = new Dog('小黑');
    d.eat()
    class Cat implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name
        }
        eat(food:string) {
            console.log(`${this.name}吃${food}`)
        }
    }
    var c = new Cat('小花');
    c.eat('小鱼');
*/
