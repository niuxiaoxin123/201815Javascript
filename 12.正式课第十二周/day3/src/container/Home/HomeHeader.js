import React from "react";
import img from "../../images/logo.png";
import Transition from 'react-transition-group/Transition';
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};

export default class HomeHeader extends React.Component {
    constructor() {
        super();
        // 如果当前状态是true，那么显示列表图标；入股是false；显示关闭图标
        this.state = {show: true}
    }

    changeShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return <div className="home-header">
            <img src={img} alt=""/>
            {this.state.show ? <i className="iconfont icon-liebiao" onClick={this.changeShow}></i> :
                <i className="iconfont icon-guanbi" onClick={this.changeShow}></i>}
            const Fade = () => (
            <Transition  in={!this.state.show} timeout={duration}
            onEnter = {(node)=>{
                node.style.display = "block";
            }}
             onExit={(node)=>{
                node.style.display="none";
             }}
            >
                {(state) => (
                    <ul className="header-course" style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                    onClick={(e)=>{
                        //console.log(e.target.dataset.type);
                        this.props.change(e.target.dataset.type)
                    }}
                    >
                        <li data-type="all">全部课程</li>
                        <li data-type="react">react课程</li>
                        <li data-type="vue">vue课程</li>
                    </ul>
                )}
            </Transition>
            );
        </div>
    }
}
