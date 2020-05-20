/*
    模块的概念（官方）：
        关于术语的一点说明：请务必注意一点，Typescript 1.5 里术语名已经发生了变化。“内部模块”现在称作“命名空间”。
    “外部模块”现在则简称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里；
    这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出他们。
    相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入他们，可以使用 import 形式之一。
    模块的概念（自己理解）：
    我们可以把一些公共的功能单独抽离成一个文件作为模块。
    模块里面的变量、函数、类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
    我们需要 export 暴露模块里面的数据（变量、函数、类...）。
    暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。
*/  

// import { dbUrl, getData, save } from './modules/db'
// console.log(dbUrl);
// getData();
// save();

// import { dbUrl, getData as get } from './modules/db'
// console.log(dbUrl);
// get();

/*
    export default 默认导出
    每一个模块都可以有一个 default 导出，默认导出使用 default 关键字标记，并且一个模块只能有一个 default 导出。
    需要使用一种特殊的导入形式。
*/

// import getData from './modules/db'

// getData();

/*对16节课的例子进行分解*/

// import { MssqlDb } from './modules/db1';

// class User {
//     username:string | undefined;
//     password:string | undefined;
// }
// var u = new User();
// u.username = '李四';
// u.password = '123456';
// var oMssql = new MssqlDb<User>();  //类作为参数来约束传入的类型
// oMssql.add(u);
// var data = oMssql.get(4);  //获取User表 ID=4的数据
// console.log(data);

/*对16节课的例子进行进一步分解*/

import { UserClass, UserModel} from './model/user'
import { ArticleClass, ArticleModel } from './model/article'

//增加数据
var u = new UserClass();
u.username = '李四'
u.password = '123456';
UserModel.add(u);

//获取 user 数据表

var res = UserModel.get(123);
console.log(res);

//获取 article 数据表
var aRes = ArticleModel.get(1);
console.log(aRes);