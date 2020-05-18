"use strict";
/*泛型：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持(类型校验)*/
//只能返回string类型的数据
// function getData(value:string):string {
//     return value;
// }
//同时返回string类型 和 number类型(代码冗余)
// function getData1(value:string):string {
//     return value;
// }
// function getData2(value:number):number {
//     return value;
// }
//同时返回string类型 和 number类型  any可以解决这个问题  但是放弃了类型检查
// function getData(value:any):any {
//     return value;
// }
// getData(123);
// getData('str');
//any放弃了类型检查，传入什么  返回什么。比如传入number类型必须返回number类型  传入 string类型必须返回string类型
//泛型，可以自持不特定的数据类型，  要求： 传入的参数和返回的参数一致
// function getData<T>(value:T):T {
//     return value;
// }
// getData<number>(123);
// getData<string>('str');
// getData<number>('str');   //错误写法
// function getData<T>(value:T):any {
//     return value;
// }
// getData<number>(123);  //参数必须是number
// getData<string>('这是一个泛型');  //参数必须是string
//泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。  通过泛型来实现
/*
    class MinClass {
        public list:number[] = [];
        add(num:number) {
            this.list.push(num);
        }
        min():number {
            var minNum = this.list[0];
            for(var i=0;i<this.list.length;i++){
                if(minNum > this.list[i]) {
                    minNum = this.list[i]
                }
            }
            return minNum;
        }
    }
    var m = new MinClass()
    m.add(2);
    m.add(5);
    m.add(22);
    m.add(45);

    alert(m.min());
*/
//类的泛型
/*
    class MinClass<T> {
        public list:T[] = []
        add(value:T):void {
            this.list.push(value);
        }
        min():T {
            var minNum = this.list[0];
            for(var i=0;i<this.list.length;i++) {
                if(minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }
            return minNum
        }
    }
    var m1 = new MinClass<number>();  //实例化类  并且指定了类的T代表的类型是number
    m1.add(3);
    m1.add(7);
    m1.add(22);
    m1.add(45);

    alert(m1.min());
    var m2 = new MinClass<string>();  //实例化类  并且指定了类的T代表的类型是string
    m2.add('n');
    m2.add('b');
    m2.add('c');
    m2.add('d');

    alert(m2.min());
*/
