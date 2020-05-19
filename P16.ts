/*
    功能：定义一个操作数据库的库  支持 Mysql Mssql MongDb
    要求：Mysql Mssql MongDb功能一样  都有add updated delete get方法
    注意：约束统一的规范、以及代码重用
    解决方法：需要约束规范所有要定义接口，需要代码重用所以用到泛型
        1、接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
        2、泛型  通俗理解：泛型就是解决 类 接口 方法的复用性
*/

interface DBI<T>{
    add(info:T):boolean;
    updated(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
//定义一个操作mysql数据库的类
class MysqlDb<T> implements DBI<T> {
    constructor() {
        console.log('数据库建立链接')
    }
    add(info: T): boolean {
        console.log(info)
        return true
    }
    updated(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title:'mmm',
                desc:'123'
            },
            {
                title:'nnn',
                desc:'456'
            }
        ]
        return list
    }
}
//
class MssqlDb<T> implements DBI<T> {
    constructor() {
        console.log('数据库建立链接')
    }
    add(info: T): boolean {
        console.log(info)
        return true
    }
    updated(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title:'xxx',
                desc:'123'
            },
            {
                title:'sss',
                desc:'456'
            }
        ]
        return list
    }   
}
//操作用户表  定义一个User类和数据表做映射
/*
    class User {
        username:string | undefined;
        password:string | undefined;
    }
    var u = new User();
    u.username = '张三';
    u.password = '123456';
    var oMysql = new MysqlDb<User>();  //类作为参数来约束传入的类型
    oMysql.add(u);
*/
    class User {
        username:string | undefined;
        password:string | undefined;
    }
    var u = new User();
    u.username = '李四';
    u.password = '123456';
    var oMssql = new MssqlDb<User>();  //类作为参数来约束传入的类型
    oMssql.add(u);
    var data = oMssql.get(4);  //获取User表 ID=4的数据
    console.log(data);