import React from "react";
export default class SliderArrow extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="arrow">
            <span className="left" onClick={()=>{this.props.turn(-1)}}>&lt;</span>
            <span className="right" onClick={()=>{this.props.turn(1)}}>&gt;</span>
        </div>
    }
}
