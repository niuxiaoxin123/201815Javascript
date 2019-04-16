import {combineReducers} from "redux";
import * as Types from "../action-type"
let initState={
    type:"all",
    todos:[
        {id:1,isSelected:false,title:"要买票"},
        {id:2,isSelected:true,title:"去吃饭"}
        ]
}
function todo(state=initState,action) {
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,{id:Date.now(),isSelected:false,title:action.val}]};
        case Types.DEL_TODO:
           let newTodo= state.todos.filter((item,index)=>item.id!==action.id);
           return {...state,todos:newTodo}
        case Types.CHA_TODO:
            let newTodos = state.todos.map((item,index)=>{
                if(index===action.id){
                    item.isSelected=!item.isSelected;
                }
                return item;
            });
            return {...state,todos:newTodos}
        case Types.CHA_TYPE:
            return {...state,type:action.val}

    }
    return state;
}
let reducers = combineReducers({
    todo
})
// { todo:{type:"all",todos:["要买票","去吃饭"]}}
export default reducers;