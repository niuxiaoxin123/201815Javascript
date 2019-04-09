import React from "react";
import ReactDOM from "react-dom";
import "./1.index.css"
// 在Js中写的标签是react的元素
// React 元素是一个虚拟的DOM对象；
// React.createElement() 语法糖；

// JSX 语法；
// JS和HTML的组合
let s = {color:"red"};

//let a = <div  style={s} className="b"></div>
// 1.支持三元运算；
// 2. 可以放数组，默认调用了toString方法；
// 3. true  false  undefined  null []都不显示
// 4.不能直接放对象
// 5. 不能直接放函数的空间地址，但是可以放入函数的执行结果
//let a =<div>{[1,2,3]}</div>
//let a =<div>{{name:1}}</div> 报错
function fn(){
    return  <li></li>
}
let a = <div>{fn()}</div>

let  t= <div>22</div>
// 1: 将虚拟的DOM转成真实的DOM
// 2.将DOM节点挂载到根元素上,替换掉根元素中所有的节点；
// 3. 挂载成功之后，执行回调；
// 4.render 的第一个参数只能是唯一的JSX元素；
ReactDOM.render(t,document.getElementById("root"),function () {

});
