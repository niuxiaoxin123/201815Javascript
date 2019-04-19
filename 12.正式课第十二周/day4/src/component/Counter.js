import React from "react";
import {connect} from "react-redux";
import actions from "../store/action/index"
class Counter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <button onClick={this.props.add}>+</button>
            <p>{this.props.num}</p>
            <button onClick={()=>{this.props.min(2)}}>-</button>
        </div>
    }
}
// state : store.getState()==> store中最大的store，包含各个组件的数据
export default connect(state=>({...state.counter}),actions)(Counter)
