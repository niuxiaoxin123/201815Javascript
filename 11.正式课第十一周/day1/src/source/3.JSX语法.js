import React from "react";
import ReactDOM from "react-dom";
import "./3.index.css";// 导入css样式；
let style ={color:"red",fontSize:"40px"}
//let h = <div style={style}>这是一个框架</div>
//let h = <div className="content">这是一个框架</div>
//let h = <div className="content">{1+2}</div>
/*let h = <div className="content">{[[<h1 key="1">1</h1>,<h1 key="2">2</h1>,<h1 key="3">3</h1>,<h1 key="4">4</h1>]]}</div>*/
/*let obj = {name:"王志超"};
let h = <div className="content">{obj.name}</div>*/
function fn() {
    let a = <div>666</div>;
    return a;
}
let h = <div className="content">{fn()}</div>
// 1. JSX语法：style={{color:"red"}}
// 2. 如果样式中有—；需要把-去掉，换成驼峰的名字；
// 3. 在react元素中不能使用class这个属性，因为是关键字；类名用className;如果用for属性，需要换成htmlFor;
// 4. 在JSX元素中，{}支持三元运算符的写法；会对JS的表达式进行计算；
// 5. 可以识别数组；将数组的每一项渲染出来；
// 6. JSX不支持直接放入对象；
// 7. true\false\null\undefined\[],都不行渲染
// 8. 不能直接使用将函数空间地址，而是将函数执行的返回值进行渲染；

ReactDOM.render(h,document.getElementById("root"))