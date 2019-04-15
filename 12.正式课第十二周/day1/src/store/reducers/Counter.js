import * as Types from "../action-type"
// 初始化zhuangta8i
let  initState={num:10};
// 定义reducer函数；
let reducer = (state=initState,action)=>{
    switch (action.type){
        case Types.ADD_NUM:
            return {num:state.num+action.n};
        case Types.MIN_NUM:
            return {num:state.num-action.n}
    }
    return state;
}
export default reducer;