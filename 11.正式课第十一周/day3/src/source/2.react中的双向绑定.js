import React from "react";
import ReactDOM from "react-dom";
// 受状态控制的组件，就是受控组件；必须要有onchange这个事件；否则不能使用；
class Input extends React.Component{
    constructor(){
        super();
        // 在constructor中初始化状态；
        this.state={val:100}
    }
    change=(e)=>{
        // 当键盘输入时会触发onchange这个事件行为；
        // e: 事件对象  e.target : 事件源
        this.setState({val:e.target.value})
    }
    render(){
        return <div>
            <input type="text" value={this.state.val} onChange={this.change}/>
            {this.state.val}
        </div>
    }
}
ReactDOM.render(<Input/>, document.querySelector("#root"));

