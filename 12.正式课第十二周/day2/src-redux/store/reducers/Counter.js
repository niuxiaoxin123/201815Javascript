import * as Types from "../action-type"
// 初始化状态
let initState={num:0};
// 当创建store时，默认调用了一次dispatch方法，也就是让reducer第一次执行；
// 当第一次执行时，传递进来的state是undefined；所以默认执行当前reducer的initState初始值；只需将这个初始值返回给store中state；
function counter(state=initState,action) {
    switch (action.type){
        case Types.ADD_COUNT:
            return {num:state.num+action.n}
        case Types.MIN_COUNT:
            return {num:state.num-action.a}
    }
    return state;
}
export default counter;

