// vue 的组件
// 可组合、可复用、可维护；
import React from "react";
import ReactDOM from "react-dom";

// 组件的定义方式有两种
// 1.function  2.class
// 1.react元素是组成组件的基本单位；
// 2. 组件的名字首字母要大写，为了区分JSX元素；
// 3. 组件定义后，可以像JSX元素一样使用；
// 4. 组件中的return只能返回一个顶级的JSX元素；
// 5. 可以用render方法，将其渲染成真实的DOM；
function Foo(props) {
    console.log(props);//接收一个对象；
    // 在react中一般情况会采用行间属性传递；
    // 通过组件的children属性传递
    return <div>下{props.weather}了</div>
}
// render
// 当render执行时，会把当前组件的行间属性进行打包，传递给当前的组件函数；
let  obj = {weather:"雨",name:"1"}
ReactDOM.render(<div>
    <Foo  weather={obj.weather} name={obj.name}></Foo>
    <Foo {...obj}></Foo>
    <Foo  weather="雪"></Foo>
    <Foo {...obj}/>
</div>, document.querySelector("#root"));