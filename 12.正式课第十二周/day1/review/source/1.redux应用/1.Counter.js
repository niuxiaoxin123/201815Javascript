import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "./redux.js";
// 初始化zhuangta8i
let  initState={num:10};
// 定义常量
const ADD_NUM="ADD_NUM";
const MIN_NUM="MIN_NUM";
// 定义reducer函数；
let reducer = (state=initState,action)=>{
    switch (action.type){
        case ADD_NUM:
            return {num:state.num+action.n};
        case MIN_NUM:
            return {num:state.num-action.n}
    }
    return state;
}
let store = createStore(reducer)
class Counter extends React.Component{
    constructor(){
        super();
        // 将redux中公共的数据取出赋值给当前组件的私有状态；
        this.state={num:store.getState().num}
    }
    componentDidMount(){
        this.a =store.subscribe(()=>{
            // 需要订阅当dispatch时，需要刷新视图的方法；
            this.setState({num:store.getState().num})
        })
    }
    add=()=>{
        // 点击button，派发动作；更改store中的状态；
        store.dispatch({type:ADD_NUM,n:2})
        /// 点击按钮，会派发一个动作，执行dispatch的时候，会默认调用reducer，并且将dispatch传递的action，传给reducer，让reducer执行；reducer执行，把其返回值覆盖store中原有的state；
    }
    min=()=>{
        store.dispatch({type:MIN_NUM,n:1})
    }
    cancel=()=>{
        this.a();
    }
    render(){
        return <div>
            <button onClick={this.add}>+</button>
            <p>{this.state.num}</p>
            <button onClick={this.min}>-</button>
            <button onClick={this.cancel}>取消</button>
        </div>
    }
}
ReactDOM.render(<Counter/>, document.querySelector("#root"));