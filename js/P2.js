"use strict";
/*
2、typeScript中的数据类型
    布尔类型（boolean）
    数字类型（number）
    字符串类型（string）
    数组类型（array）
    元组类型（typle）
    枚举类型（enum）
    任意类型（any）
    null 和 undefined
    void类型
    never类型
*/
//布尔类型（boolean） ture false
// var flag:boolean = true
// flag = false
//数字类型（number）
// var a:number = 123
// console.log(a)
// a=12.3
// console.log(a)
//字符串类型（string）
// var str:string = "this is ts"
// str = "你好TS"
// console.log(str)
//数组类型（array）
//第一种定义数组的方式
// let arr:number[] = [1,2,34,567]
// console.log(arr)
// let arr:string[] = ["php","js","golang"]
//第二种定义数组的方式
// let arr:Array<number> = [11,22,33,44]
// console.log(arr)
//第三种
// let arr:any[] = ['string',123,true]
// console.log(arr)
//元组类型（typle）  属于数组的一种
// let arr:[string,number,boolean] = ["TS",12,true]
// console.log(arr)
//枚举类型（enum）
// enum Flag {success=1,error=-1}
// var f:Flag = Flag.success
// console.log(f)
// enum Color {red,blue,orange}
// var c:Color = Color.orange
// console.log(c) //输出：2
// enum Color {red,blue=5,orange}
// var c:Color = Color.orange
// console.log(c) //输出：6
