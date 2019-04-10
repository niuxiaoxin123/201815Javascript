import React from "react";
import SliderItem from "./SliderItem"
import SliderDots from "./SliderDots"
import SliderArrow from "./SliderArrow"
export  default  class Slider extends React.Component{
    constructor(){
        super();
        // slider组件初始化一个状态；
        this.state={index:0}
    }
    componentDidMount(){
        // 当结构准备完毕，触发go方法；go调用了turn；可以更改状态；
        this.go();
    }
    turn=(step)=>{
        // 用来设置状态的；
        // 当前的状态如果是3,说明是轮播图的最后一张，让其瞬间left归0；并且需要清除动画的transition时间；重新设置状态；
        if(this.state.index===3){
            this.slider.style.left="0px";
            this.slider.style.transitionDuration="0s";
            // 强制重绘；
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration="0.5s";
            this.setState({index:1});
            return;
        }
        if(this.state.index+step===-1){
            this.slider.style.left="-1200px";
            this.slider.style.transitionDuration="0s";
            // 强制重绘；
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration="0.5s";
            this.setState({index:2});
            return;
        }
        this.setState({index:this.state.index+step})
    }
    go=()=>{
        this.timer = setInterval(()=>{
            this.turn(1);
        },2000)
    }
    getSlider=(x)=>{
        // this--> 当前Slider的实例；
        this.slider=x;
        console.log(this.slider);
    }
    render(){
        return <div className="container" onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.timer = setInterval(()=>{this.turn(1);
        },2000)}}>
            <SliderItem img={this.props.imgs} index={this.state.index} slider={this.getSlider}/>
            <SliderDots img={this.props.imgs} index={this.state.index} turn={this.turn}/>
            <SliderArrow turn={this.turn}/>
        </div>
    }
}