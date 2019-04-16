import React from "react";
import store from "../store/index"
export default class Compute extends React.Component{
    constructor(){
        super();
        this.state={n:store.getState().counter.num}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({n:store.getState().counter.num})
        })
    }
    render(){
        return <div>
            <span>{this.state.n%2?"奇数":"偶数"}</span>
        </div>
    }
}
