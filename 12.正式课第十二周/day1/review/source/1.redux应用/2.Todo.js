import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "./redux";
let  initState={todos:["吃饭","学习","考试"]};
const  ADD_TODO="ADD_TODO";
let reducer=(state=initState,action)=>{
    switch (action.type){
        case ADD_TODO:
            return {todos:[...state.todos,action.val]}
    }
    return state;
}
let store = createStore(reducer)
class Todo extends React.Component{
    constructor(){
        super();
        this.state= store.getState();
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    addTodo=(e)=>{
        if(e.keyCode===13&&e.target.value){
            store.dispatch({type:ADD_TODO,val:e.target.value})
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
ReactDOM.render(<Todo/>, document.querySelector("#root"));

