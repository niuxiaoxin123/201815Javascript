import React from "react";
import ReactDOM from "react-dom";
let time;
function tick() {
    time = <div>
        {/*toLocaleString：将时间对象转化成本地时间的字符串*/}
        <h1>{new Date().toLocaleString()}</h1>
    </div>
    ReactDOM.render(time,document.getElementById("root"));
}
tick();
setInterval(tick,1000);
// ReactDOM.render :只执行一次；
// ReactDOM.render : 会让视图重新渲染一次；
// DOM-diff;
// 在React中，需要重新调用render方法，然后进行DOM-diff的对比，浏览器页面的DOM树和虚拟的DOM树进行对比，把不同的地方进行替换；
