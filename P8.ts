/*
    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作规范，在程序设计里面，接口起到一种限制和规范的作用。
    接口可以约束属性、函数、可索引和类等。
    定义标准
*/

//1、属性的接口    对JSON类的约束

//ts中定义方法
/*
    function printLabel():void {
        console.log('printLabel';
    }
    printLabel();
*/

//ts中定义方法传入参数
/*
    function printLabel(label:string):void {
        console.log('printLabel')
    }
    printLabel('hhhaaa');
*/

//ts中自定义方法传入参数对json进行约束

/*
    function printLabel(labelInfo: {label: string}):void {
        console.log('printLabel')
    }

    printLabel('hhhaaa');  //错误的写法
    printLabel({name:'张三'});  //错误写法
    printLabel({label:'张三'});  //正确写法
*/

//对批量方法传入参数进行约束。
//接口：行为和动作规范，对批量方法进行约束

//就是传入对象的约束    属性接口
/*
    interface FullName {
        firstName:string;  //注意；结束
        secondName:string;
    }
    function printName(name:FullName) {
        //必须传入对象 firstName secondName
        console.log(`${name.firstName}--${name.secondName}`)
    }

    //printName('1213')  //错误的写法

    //printName({
    //    age:20,
    //    firstName:'张',
    //    secondName:'三',
    //})  //错误的写法  必须只有 firstName 和 secondName
    var obj = {  //传入的对象  必须有irstName 和 secondName
        age:20,
        firstName:'张',
        secondName:'三',
    }
    printName(obj)  //正确
*/

/*
    interface FullName {
        firstName:string;  //注意；结束
        secondName:string;
        age:number;
    }
    function printName(name:FullName) {
        //必须传入对象 firstName secondName
        console.log(`${name.firstName}--${name.secondName}`)
    }

    function printInfo(info:FullName) {
        //必须传入对象 firstName secondName
        console.log(`${info.firstName}${info.secondName}`)
    }

    //printName('1213')  //错误的写法

    //printName({
    //    age:20,
    //    firstName:'张',
    //    secondName:'三',
    //})  //错误的写法  必须只有 firstName 和 secondName
    var obj1 = {  //传入的对象  必须有irstName 和 secondName
        age:20,
        firstName:'张',
        secondName:'三',
    }
    var obj2 = {
        age:20,
        firstName:'李',
        secondName:'四',
    }
    printName(obj1)  //正确
    printInfo(obj2)
*/

//接口：可选属性

/*
    interface FullName {
        firstName:string;
        secondName?:string;  //可选属性
    }
    function getName(name:FullName) {
        console.log(name)
    }
    //参数的顺序可以不一样
    getName({
        firstName:'',
        // secondName:''
    })
*/