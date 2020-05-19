//泛型接口
//函数类型接口
    // interface ConfigFn {
    //     (value1:string,value2:string):string;
    // }
    // var setData:ConfigFn = function(value1:string,value2:string):string {
    //     return value1+value2;
    // }
    // setData('name','张三');
//1、泛型接口
    // interface ConfigFn {
    //     <T>(value1:T):T;
    // }
    // var setData:ConfigFn = function<T>(value:T):T {
    //     return value;
    // }
    // // setData<string>('张三');  //正确
    // setData<string>(123);  //错误
//2、泛型接口
    // interface ConfigFn<T>{
    //     (value:T):T;
    // }
    // function getData<T>(value:T):T {
    //     return value;
    // }
    // var myGetData:ConfigFn<string> = getData;
    // myGetData('20')  //正确
    // myGetData(20)  //错误