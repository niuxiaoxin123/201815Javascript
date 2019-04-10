import React from "react";
export default class SliderItem extends React.Component{

    render(){
        // SliderItem这个组件使用了属性index；index是父组件的状态当更改父组件中的状态，当前组件会重新render；
        // 通过更改状态，然后更改wrapper的left值；
        let style={
            left:-this.props.index*400+"px",
            transition:`left 0.5s linear`
        }
        return <ul className="wrapper" style={style} ref={this.props.slider}>
            {this.props.img.map((item,index)=>{
                return <li key={index}>
                    <img src={item} alt=""/>
                </li>
            })}
        </ul>
    }
}