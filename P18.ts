/*
    命名空间：
        在代码量较大的情况下，为了避免各种变量命名相冲突，可以将相似功能的函数、类、接口等放置到命名空间内
        同Java包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来
        只对外暴露需要外部访问的对象。命名空间内的对象通过export导出
    命名空间和模块的区别：
        命名空间：内部模块，主要用于组织代码，避免命名冲突。
        模   块：ts的外部模块简称，侧重代码的复用，一个模块里可能会有多个命名空间。
*/

namespace A {
    class Animal {
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat() {  //具体吃什么  不知道，集体吃什么？继承它的子类自己去实现，每一个子类的表象不一样。
            console.log('吃的方法')
        }
    }
    
    export class Dog extends Animal {
        constructor(name:string) {
            super(name)
        }
    
        eat() {
            return `${this.name}吃骨头`
        }
    }
    
    export class Cat extends Animal {
        constructor(name:string) {
            super(name)
        }
    
        eat() {
            return `${this.name}吃小鱼`
        }
    }
}
namespace B {
    class Animal {
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat() {  //具体吃什么  不知道，集体吃什么？继承它的子类自己去实现，每一个子类的表象不一样。
            console.log('吃的方法')
        }
    }
    
    export class Dog extends Animal {
        constructor(name:string) {
            super(name)
        }
    
        eat() {
            return `${this.name}吃骨头`
        }
    }
    
    export class Cat extends Animal {
        constructor(name:string) {
            super(name)
        }
    
        eat() {
            return `${this.name}吃小鱼`
        }
    }
}
var d = new A.Dog('狼狗');
d.eat();
var c = new B.Cat('小花');
console.log(c.eat());