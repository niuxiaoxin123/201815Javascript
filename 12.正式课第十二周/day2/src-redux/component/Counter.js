import React from "react";
import store from "../store/index"
import actions from "../store/actions/Counter"
import {connect} from "react-redux"
// react-redux : Provider   connect
// react-redux：将store中的状态以属性方式传递给每一个组件；将action中的每一个动作以属性的方式传递给每一个组件；
// react-redux : 必须导出一个连接后的组件
class Counter extends React.Component{
    /*constructor(){
        super();
        this.state=store.getState().counter
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        })
    }*/
    add=()=>{
        // store.dispatch(actions.add(2))
        this.props.add(3)
    }
    minu=()=>{
       /* store.dispatch(actions.min())*/
       this.props.min(2)
    }
    render(){
        console.log(this.props);
        return <div>
            <button onClick={this.add}>+</button>
            <p>{this.props.num}</p>
            <button onClick={this.minu}>-</button>
        </div>
    }
}
/*export default connect(state=>({...state.counter}),dispatch=>({
    add:(n)=>{dispatch(actions.add(n))},
    min:(m)=>{dispatch(actions.min(m))}
}))(Counter)*/
export default connect(state=>({...state.counter}),actions)(Counter)
// 如果connect第二个参数传的是对象；那么会默认调用bindActionsCreator这个方法；这个方法就是将actions这个对象进行重新包装；
let bindActionsCreator=(actions,dispatch)=>{
    // action :就是你写的actions
    // dispatch : store.dispatch
    let obj = {};
    for(let key in actions){
        obj[key]=(...arg)=>{
            dispatch(actions[key](...arg))
        }
    }
    return obj;
}

// 在connect中有两个形参，mapStateToProps\mapDispatchToProps

// let mapStateToProps=(state)=>{
//     // state : store.getState()
//     return {...store.getState()}
// }
// let  mapDisPatchToProps=(dispatch)=>{
//     // store.dispatch
//     return {add:()=>{dispatch(actions.add())}}
// }
//
// let connect =(mapStateToProps,mapDisPatchToProps)=>(Component)=>{
//     return <Component {...mapStateToProps()} {...mapDisPatchToProps()}/>
// }
//
// 第一个参数，是将store中的状态映射到当前组件的属性上；
// state :store中公共的state；返回值就是组件的属性；
// 第二个参数： 将dispatch动作映射到当前组件上；
// dispatch : 这个就是store.dispatch
