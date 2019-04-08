import React from "react";
import ReactDOM from "react-dom";
let h = <div>标题</div>;
let t = <h1 id="content">正文</h1>
// root 是react元素最后注入的根元素；在Public文件夹下的index.html中存在；
//ReactDOM.render(h,document.getElementById("root"));
let c = document.getElementById("content");
console.log(c);// null
ReactDOM.render(t,document.getElementById("root"),function () {
    // 这个回调函数是一个同步的执行过程；当把真实DOM渲染到页面之后，执行这个地方的回调函数；
    console.log(document.getElementById("content"));
});
// ReactDOM.render:
// 1) 把虚拟的DOM转换成真实的DOM；
// 2) 把真实的DOM插入到根元素中；
// 3) ReactDOM 当render渲染时，会把根元素中的所有DOM结构进行替换；
// 4) 第三个参数是个回调函数，当把真实DOM渲染到页面之后，执行这个地方的回调函数；
