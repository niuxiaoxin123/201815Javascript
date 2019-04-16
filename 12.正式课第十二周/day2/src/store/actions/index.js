import * as Types from "../action-type";
export default {
    addTodo(val){
        return {type:Types.ADD_TODO,val}
    },
    delTodo(id){
        return {type:Types.DEL_TODO,id}
    },
    chaTodo(id){
        return {type:Types.CHA_TODO,id}
    },
    chaType(val){
        return {type:Types.CHA_TYPE,val}
    }
}
