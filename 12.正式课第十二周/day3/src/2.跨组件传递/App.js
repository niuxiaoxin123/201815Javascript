import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import PropTypes from "prop-types";
// react是单向数据流；数据必须是一级一级向下传递；
// 数据传递 props
// redux
// context
// context 实现跨组件的数据传递；
// 父： childContextTypes   getChildContext 函数
// 子: contextTypes
class App extends React.Component{
    constructor(){
        super();
        this.state={color:"blue"}
    }
    // 定义子组件的上下文类型
    static childContextTypes ={
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    getChildContext(){
        // 这个函数的返回值定义子组件中可以获取的数据
        return {color:this.state.color,setColor:this.setColor}
    }
    setColor=()=>{
        this.setState({
            color:"red"
        })
    }
    render(){
        return <div>
            <Header />
        </div>
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"));