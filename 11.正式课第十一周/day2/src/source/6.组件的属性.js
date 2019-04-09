import React from "react";
import ReactDOM from "react-dom";
class Build extends React.Component{
    render(){
        // 通过props传递过来的都是属性
        // 属性是props从外界传递过来的；
        console.log(100);
        return <div>{this.props.time.toLocaleString()}</div>
    }
}
// 在react中,属性和状态的变化都会影响视图的更新
// 属性在取值时，只能获取当前作用域下的数据；
setInterval(()=>{
    // 当调用ReactDOM.render时，会默认调用组件的render的方法；导致视图的重新渲染；
    ReactDOM.render(<Build time={new Date()}/>,document.querySelector("#root"));
},1000)

