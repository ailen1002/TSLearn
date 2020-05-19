"use strict";
/*
    泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型校验），下面我们看看把类当做参数的泛型类
    1、定义个类
    2、把类作为参数来约束传入的数据类型
*/
//例如最小的堆算法  普通类型
// class MinClass {
//     public list:number[] = [];
//     add(num:number) {
//         this.list.push(num);
//     }
//     min():number {
//         var minNum = this.list[0];
//         for(var i=0;i<this.list.length;i++){
//             if(minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum;
//     }
// }
// var m = new MinClass()
// m.add(2);
// m.add(5);
// m.add(22);
// m.add(45);
// alert(m.min());
/*
    定义一个 User 的类，这个类的作用是映射数据库字段
    然后定义一个 MysqlDB 的类，这个类的作用是操作数据库
    然后把 User 类作为参数传入到 mysqlDB 中
*/
//把类作为参数来约束数据传入的类型
/*
    class User {
        username:string | undefined;
        password:string | undefined;
    }
    class MysqlDB {
        add(user:User):boolean {
            console.log(user);
            return true;
        }
    }
    var u = new User();
    u.username = '张三';
    u.password = '123456';
    var db = new MysqlDB();
    db.add(u);
*/
/*
    class ArticleCate {
        title:string | undefined;
        desc:string | undefined;
        status:number | undefined;
    }
    class MysqlDB {
        add(info:ArticleCate):boolean {
            console.log(info);
            return true;
        }
    }
    var a = new ArticleCate();
    a.title = '国内';
    a.desc = '国内新闻';
    a.status = 1;
    var db = new MysqlDB();
    db.add(a);
*/
//操作数据库的泛型类
// class MysqlDB<T> {
//     add(info:T):boolean {
//         console.log(info);
//         return true;
//     }
//     updated(info:T,id:number) {
//         console.log(info);
//         console.log(id);
//         return true;
//     }
// }
//给User表增加数据
// 1、定义一个User类  和数据库进行映射
// class User {
//     username:string | undefined
//     password:string | undefined
// }
// var u = new User();
// u.username = '张三';
// u.password = '123456';
// var db = new MysqlDB<User>();  //User类对add传入数据进行验证
// db.add(u);
//2、定义一个ArticleCate类  和数据库进行映射
// class ArticleCate {
//     title:string | undefined;
//     desc:string | undefined;
//     status:number | undefined
//     constructor(params:{
//         title:string | undefined,
//         desc:string | undefined,
//         status?:number | undefined
//     }) {
//         this.title = params.title;
//         this.desc = params.desc;
//         this.status = params.status;
//     }
// }
//增加操作
// var a = new ArticleCate({
//     title:'分类',
//     desc: '1111'
// });
// //类当做参数的泛型类
// var db = new MysqlDB<ArticleCate>();
// db.add(a);
//更新操作
// var a = new ArticleCate({
//     title:'分类111',
//     desc:'222'
// })
// a.status = 0;
//类当做参数的泛型类
// var db = new MysqlDB<ArticleCate>();
// db.updated(a,12);
