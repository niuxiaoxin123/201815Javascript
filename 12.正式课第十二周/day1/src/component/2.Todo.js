import React from "react";
import store from "../store/index"
import actions from "../store/actions/Todo"
export default  class Todo extends React.Component{
    constructor(){
        super();
        console.log(store.getState());
        this.state=store.getState().todo;
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState(store.getState().todo)
        })
    }
    addTodo=(e)=>{
        if(e.keyCode===13&&e.target.value){
            store.dispatch(actions.addTodo(e.target.value))
            e.target.value="";
        }
    }
    render(){
        return <div>
            <input type="text" onKeyUp={this.addTodo}/>
            <ul>
                {this.state.todos.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    }
}
