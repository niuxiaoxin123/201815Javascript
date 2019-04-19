import React from "react";
export default class SliderDots extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <ul className="focus">
            {this.props.imgs.map((item, index) => {
                if (index === this.props.imgs.length - 1) {
                    // 如果当前的索引到最后一张时，不需要返回任何的li;这是一张重复的图片；为了实现无缝滚动；
                    return null;
                }
                // 当索引为3时，就是最后一张图片；但是最后一张图片没有与之对应的li;索引为3时，让li索引为0的选中；
                return <li key={index}
                           className={this.props.index === index || this.props.index - index === this.props.imgs.length - 1 ? "active" : ""}
                           onClick={() => {
                               // 让目标状态减去初始的状态；就是step值；
                                this.props.turn(index-this.props.index)
                           }}></li>
            })}
        </ul>
    }
}
