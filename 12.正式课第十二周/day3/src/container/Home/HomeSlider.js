import React from "react";
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component{
    constructor(){
        super();
        this.state = {index:0}
    }
    render(){
        //console.log(this.props.sliders);
        let option = {
            continuous: true,
            auto:2000,
            callback:(index,ele)=>{
                // 每轮播一张，就会执行一次；给当前函数传了一个index;代表当前显示图片的索引；
                //console.log(index);
                this.setState({index:index})
            }
        }
        return <div className="home-swipe">
            <ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>
                {/*key : 可以轮播图重新渲染的属性；*/}
                {this.props.sliders.map((item,index)=>{
                    return <div key={index}>
                        <img src={item} alt=""/>
                    </div>
                })}
            </ReactSwipe>
            <div className="focus">
                {this.props.sliders.map((item,index)=>{
                    return <span key={index} className={this.state.index===index?"active":""}></span>
                })}
            </div>
        </div>
    }
}
