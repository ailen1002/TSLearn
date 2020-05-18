//任意类型（any）
//     var num:any = 123
//     num = "str"
//     console.log(num) 
//null 和 undefined 其他（never类型）数据类型的子类型

    // var num:number;
    // console.log(num) //输出：undefined   报错


    // var num:undefined;
    // console.log(num) //输出：undefined   正确

//定义没有赋值就是undefined

    // var num:number | undefined;

    // console.log(num)

    // var num:null;

    // num = null;

//一个元素可能是number，可能是null，可能是undefined

    // var num:number | null | undefined

    // num = 123

    // console.log(num)

//void类型：typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。

//表示方法没有返回任何类型
/*
    //正确写法
    function run():void{
        console.log('run')
    }
    run();

    //错误写法
    function run():undefined{
        console.log('run')
    }
    run()；

    //正确写法

    function run():number{
        return 123
    }
    run();

*/

//never类型：是其他类型（包括null 和 undefined）的子类型，代表不会出现的值。
//这意味着声明never的变量只能被never类型所赋值

/*
    var a:undefined;

    a = undefined;

    var b:null;

    b = null;
*/

    // let a:never;
    // // a = 123  //
    // a = (() => {
    //     throw new Error('错误')
    // })()



