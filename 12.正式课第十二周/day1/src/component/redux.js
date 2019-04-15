let  createStore =(reducer)=>{
    let state;
    let listeners = [];
    let getState=()=>JSON.parse(JSON.stringify(state))
    let dispatch =(action)=>{
        state = reducer(state,action)
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        })
    }
    dispatch({});
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
let combineReducers=(reducers)=>{
    //reducers : {counter:function(){},todo}
    //{counter:{num:10},todo:{todos:[]}}
    //{num:10,todo:[]}
    return (state={},action)=>{
        let obj = {};
        for(let key  in reducers){
            obj[key]=reducers[key](state[key],action)
        }
        return obj;// 把整体覆盖给全局的state；
    }
}
//export default createStore;
 export {createStore,combineReducers}
/*
let  a = {c:1};
let b = JSON.parse(JSON.stringify(a));
b.c=10;
*/
