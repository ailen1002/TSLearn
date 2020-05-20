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
//定义一个操作Mssql数据库的类
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
export { MysqlDb, MssqlDb};