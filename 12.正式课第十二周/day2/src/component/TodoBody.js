import React from "react";
import {connect} from "react-redux"
import actions from "../store/actions/index"
class TodoBody extends React.Component{
    del=(id)=>{
        this.props.delTodo(id);
    }
    change=(id)=>{
        // 修改store中isSelected属性；
        this.props.chaTodo(id);
    }
    filterTodo=()=>{
        // 对todo进行过滤；
        let todo;
        if(this.props.type==="all"){
            todo = this.props.todos;
        }
        if(this.props.type==="finish"){
            todo = this.props.todos.filter(item=>item.isSelected)
        }
        if(this.props.type==="unfinish"){
            todo = this.props.todos.filter(item=>!item.isSelected)
        }
        return todo;
    }
    render(){
        console.log(this.props);
        return <div>
            <ul className="list-group">
                {this.filterTodo().map((item,index)=>{
                    return <li key={index} className="list-group-item">
                                <input type="checkbox" checked={item.isSelected} onChange={()=>{this.change(index)}}/>
                                {item.title}
                                <button className="btn btn-danger pull-right btn-xs" onClick={()=>{this.del(item.id)}}>删除</button>
                            </li>
                })}
            </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoBody)
