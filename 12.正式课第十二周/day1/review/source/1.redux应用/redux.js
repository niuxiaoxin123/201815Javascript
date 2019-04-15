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
//export default createStore;
 export {createStore}
/*
let  a = {c:1};
let b = JSON.parse(JSON.stringify(a));
b.c=10;
*/
