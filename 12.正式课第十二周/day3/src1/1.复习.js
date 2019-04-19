// 1.redux
// 统一数据管理；把各个组件公共数据放到store中；state;
// 1) store.getState()
// 2) store.dispatch({})==>reducer(自定义：返回一个状态)
// 3) store.subscribe==> 返回值是取消订阅的方法；
// combineReducers: 合并各个组件的reducer；
/*let combineReducers = (reducers)=>{
    return (state={},actions)=>{
        let obj={}
        for(let key in reducers){
            obj[key]=reducers[key](state[key],actions)
        }
        return obj;
    }
}
// {todo:{},counter:{}}
function todo() {

}
function counter() {

}
combineReducers({
    todo,
    counter
})*/
// 2. react-redux: 把store中的状态和actions中的动作包装放到了每一个组件的属性上；
// Provider : 组件   connect()() ： 高阶函数
let a=b=>c=>d;