import * as Types from "../action-type"
let initState = {todos:["要吃饭","要学习"]}


let reducer=(state=initState,action)=>{
    switch (action.type){
        case Types.ADD_TODO:
            return {todos:[...state.todos,action.val]}
    }
    return state;
}
export  default reducer;