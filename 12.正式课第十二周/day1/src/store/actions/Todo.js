import  * as Types from "../action-type";
export  default {
    addTodo(val){
        return {type:Types.ADD_TODO,val}
    }
}