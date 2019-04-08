import React from "react";
import ReactDOM from "react-dom";

// react :是核心库，当使用JSX语法时，必须让React存在当前作用域下；
// ReactDOM : 将react元素或react组件插入到页面中；
// react元素： 就是通过JSX语法创建的在JS中存在的HTML标签；
// JSX语法；是一种JS和HTML组合的一种混合语法；
let a = <div>不要睡觉
    <div>
        <ul></ul>
    </div>
</div>;
console.log(a);
// 这个react元素就是一个虚拟的DOM元素；当前这个虚拟的对象存在于当前的作用域下；

ReactDOM.render(a,document.getElementById("root"),function () {
    console.log(100);
});
// ReactDOM.render: 渲染；
// 1. 将传递进来的第一个实参变成真实的DOM节点；
// 2. 将转换的真实DOM插入到根元素中；