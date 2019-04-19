import React from "react";
export default class HomeLesson extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.list);
        return <div className="home-lesson">
              <div className="home-title">
                  <span>全部课程</span>
              </div>
            {
                this.props.list.map((item,index)=>{
                    return <li key={index} className="lesson">
                        <img src={item.poster} alt=""/>
                        <p className="price">{item.price}</p>
                        <p>{item.title}</p>
                    </li>
                })
            }
        </div>
    }
}
