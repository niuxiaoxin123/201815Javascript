import React from "react";
import {connect} from "react-redux"
import actions from "../store/actions/index";
class TodoFooter extends React.Component{
    render(){
        return <div>
            <ul className="nav nav-pills" onClick={(e)=>{
                this.props.chaType(e.target.dataset.type)
                console.log(e.target.dataset)
            }
            }>
                <li role="presentation" className={this.props.type==="all"?"active":""}><a href="#"  data-type="all">全部任务</a></li>
                <li role="presentation" className={this.props.type==="finish"?"active":""}><a href="#"  data-type="finish">已完成</a></li>
                <li role="presentation" className={this.props.type==="unfinish"?"active":""}><a href="#"  data-type="unfinish">未完成</a></li>
            </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),diapatch=>{
    return {
        add(){
            dispatch(actions.add())
        }
    }
})(TodoFooter)
