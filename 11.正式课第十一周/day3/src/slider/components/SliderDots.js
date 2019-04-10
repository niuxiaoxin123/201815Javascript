import React from "react";
export default class SliderDots extends React.Component{
    render(){
        return <ul className="focus">
            {this.props.img.map((item,index)=>{
                // 当最后一次时，不需要再创建li;
                if(index===this.props.img.length-1){
                    return null;
                }
               // 当最后一张时，让第一张选中
                // index : 0  1  2;
                // this.props.index     index
                //      0              0  1  2      0
                //      1              0  1  2      1
                //      2              0  1  2      2
                //      3              0  1  2      0
                return <li className={this.props.index===index||this.props.index-index===3?"active":""} key={index} onClick={()=>{this.props.turn(index-this.props.index)}}></li>
            })}
        </ul>
    }
}