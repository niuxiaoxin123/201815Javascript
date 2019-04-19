import React from "react";
import {connect} from "react-redux";
import actions from "../store/action/counter";
class Counter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
               <p>{this.props.num}</p>
               <button onClick={()=>{
                       this.props.add(2)
               }}>+</button>
               <button onClick={()=>{
                   this.props.min(1)
               }}>-</button>
        </div>
    }
}
export default connect(state=>({...state}),actions)(Counter)