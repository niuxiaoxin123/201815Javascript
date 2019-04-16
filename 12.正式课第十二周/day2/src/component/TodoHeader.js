import React from "react";
import {connect} from "react-redux"
import actions from "../store/actions/index"
class TodoHeader extends React.Component{
    add=(e)=>{
        if(e.keyCode===13&&e.target.value){
            // 当键盘抬起，并且输入框不是空；触发
            this.props.addTodo(e.target.value);
            e.target.value="";
        }
    }
    render(){
        return <div>
            <h2>亲，你还有{this.props.todos.filter(item=>!item.isSelected).length}件事未完成</h2>
            <input type="text" className="form-control" onKeyUp={this.add}/>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoHeader)
