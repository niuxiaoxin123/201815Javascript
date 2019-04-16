// createStore   combineReducers
let  createStore =(reducer)=>{
    let state;
    // 为了防止外界直接修改当前store中的state；所以需要将该状态进行深拷贝一份；
    // 键值对完全相同，空间地址是不同的；
    let listeners =[];
    let getState =()=>JSON.parse(JSON.stringify(state));
    let dispatch=(action)=>{
        state =reducer(state,action);
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        })
    }
    let subscribe=(fn)=>{
        listeners.push(fn)
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
/*let counter = {num:10};
let todo ={todos:[]}

{couter:{num:0},todo:{todos:[]}}*/

let combineReducers =(obj)=>{
    return (state,action)=>{
        let newState={};
        for(let key in obj){
            // obj[key] : 代表每一个组件的reducer；返回对应组件的state；
            newState[key]=obj[key](state[key],action)
        }
        return newState;
    }
}



