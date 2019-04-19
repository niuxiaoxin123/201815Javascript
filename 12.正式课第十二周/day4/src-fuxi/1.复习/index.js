import React from "react";
// jsx
// 1. className  htmlFor
// 2. style
// 3. {}

// React.createElement("ul",{},"");返回一个虚拟的DOM对象
let  div =<div style={{color:"red"}}>{}</div>;
// render


// 组件
function Fn(){
    // this --> undefined
}
class Counter extends React.Component{
    constructor(){
        super();
        this.state={}// 早constructor中初始化state；
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        this.props.a=10;
    }
}
<Counter a="1"/>
// 有this-> 组件实例 props  state   生命周期
// props ,state
// react是单向数据流，一级一级向下传递；
// shouldComponentUpdate(父)-->componentWillUpdate(父)-> render(父)--> componentWillReceiveProps(子)--> shouldComponentUpdate(子)--> componentWillUpdate(子)-->render(子)-->componentDidUpdate(子)--componentDidUpdate(父)
// react中shouldComponentUpdate是react中经常使用优化的一种方案；
// 会根据这个钩子函数返回值判断要不要进行更新；

// redux ：
//  createStore
// counter:{num:1}
// todo:["",""]
let createStore = (reducer)=>{
    let state;
    // 深克隆；为了防止外界直接更改当前作用域的state；
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let dispatch=(action)=>{
        state=reducer(state,action)
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        })
    }
    dispatch({});//
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
function counter(state=initState,action) {
    state.counter.num
    return state;
}
function todo() {

}
// {}
let combineReducers=(reducers)=>{
    return (state,action)=>{
        // state: store中的state  action： dispatch 传进来的action;
        let obj = {};
        for(let key in reducers){
            // 每一个组件的reducer的返回值是给obj的一个属性；
            // obj的counter属性的属性值是counter函数的返回值；是counter组件的state；
            // 把多个组件的私有state放入到store中的state的属性上；
            obj[key] = reducers[key](state[key],action)
        }
        return obj;
    }
}
// {counter:{num:1}，todo:{todo 的state}}
let reducers=combineReducers(
    {counter,todo}
)
let store = createStore(reducers)
function reducer(state=initState,action) {
    // es6 ;如果state没有值，或者传来的是undefined；那么initState有效；
    return state;
}
store.getState();

// react-redux : 将
// Provider
// bindActionCreators
// connect(state=>({...state.counter}),dispatch=>({
    return {
        add(){
            dispatch(action.add())
        },
        min(){
            dispatch(action.min())
        }
    }
// }))(Counter)
this.props.add()

// 路由 ： HashRouter  Route  Link  Switch  Redirect
// this.props.history.push()  : 直接跳转
// this.props.match.params : 参数；只有路由渲染的组件有该属性；

