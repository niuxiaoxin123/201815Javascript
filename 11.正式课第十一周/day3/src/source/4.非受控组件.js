import React from "react";
import ReactDOM from "react-dom";
class Sum extends React.Component{
    constructor(){
        super();
        this.state={result:0}
    }
    change=()=>{
        //console.log(document.getElementById("a"));
        // 非受控组件：不受状态控制
        // 获取元素的方法
        // 1. 在元素的属性加上ref="a"   this.refs.a
        // 2. ref : 属性值是个函数；函数的形参就是当前的元素；把元素给了当前实例的c属性；
        /*let result = Number(this.refs.a.value||0)+ parseInt(this.refs.b.value||0)
        this.setState({result});*/
        console.log(this.c.value);// 代表第二个input框
    }
    render(){
        // 当改变input框内容时，会触发父级元素的onchange事件行为；
        return <div  onChange={this.change}>
            <input type="text" ref="a"/>+
            <input type="text" ref={(b)=>{this.c=b}}/>
            {this.state.result}
        </div>
    }
}


ReactDOM.render(<Sum/>,document.querySelector("#root"))

