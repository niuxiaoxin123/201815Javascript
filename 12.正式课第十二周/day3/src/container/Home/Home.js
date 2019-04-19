import React from "react";
import HomeHeader from "./HomeHeader";
import HomeSlider from "./HomeSlider";
import HomeLesson from "./HomeLesson";
import "./index.less"
import {connect} from "react-redux";
import actions from "../../store/action/home";
import {downFresh} from "../../utils"
 class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        // 当组件加载完毕，开始请求数据；
        this.props.getSlider();
        this.props.getLessonList();
        /// 当触发这个内容盒子的scroll事件时，触发getLessonList 这个请求；
        downFresh(this.content,this.props.getLessonList)
    }
    render(){
        return <div>
            <HomeHeader  change={this.props.changeType}/>
            <div className="home-content" ref={x=>this.content=x}>
                <HomeSlider sliders={this.props.home}/>
                <HomeLesson list={this.props.lesson.list}/>
            </div>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home)