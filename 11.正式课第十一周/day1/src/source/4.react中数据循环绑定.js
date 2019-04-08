import React from "react";
import ReactDOM from "react-dom";
let data = [{name:"子超",age:20},{name:"肖贺",age:21}];
/*let u = <ul>
    <li>{data[0].name,data[0].age}</li>
    <li>{data[1].name}{data[1].age}</li>
</ul>*/

let u = <ul>
    {/*数组的map方法，会将数据映射成一个每一项都是JSX元素的数组；*/}
    {/*[<li></li>,<li></li>]*/}
    {data.map((item,index)=>{return <li key={index}>{item.name}{item.age}</li>})}
</ul>
ReactDOM.render(u,document.getElementById("root"));
