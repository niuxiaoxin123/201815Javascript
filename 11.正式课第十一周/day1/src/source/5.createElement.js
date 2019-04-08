import React from "react";
import ReactDOM from "react-dom";// 导出模块需要将import放到当前页面的最上面；
let u = <ul a="1" key="2">
    我爱你中国
    <li>北京</li>
    <li>回龙观</li>
</ul>
// React.createElement : 函数；返回一个虚拟的DOM对象；
// param1 ： 元素类型
// param2 : 行间属性
// param3 : 文本内容
// 从第三个参数开始都是子元素；
// JSX 元素是一种语法糖；
//let a = <ul a="1">我爱你中国</ul>
let a = React.createElement(
    "ul",
    {a:1},
    "我爱你中国",
    React.createElement("li",null,"北京"),
    React.createElement("li",null,"回龙观")
);
console.log(u);
console.log(a);
ReactDOM.render(a,document.getElementById("root"))
