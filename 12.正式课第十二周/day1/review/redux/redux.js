// 创建一个store;
let createStore =(reducer)=>{
    // 在当前作用域下，创建一个私有的state；用来存储所有的组件的数据；
    let state;
    // 创建返回state的一个函数
    // 在redux中必须通过dispatch去更改store中的state；
    let listeners =[];
    let getState=()=>{
        // 采用深克隆的方法，将状态克隆一份，并且是一个新的空间地址；
        return JSON.parse(JSON.stringify(state))
    };
    let dispatch=(action)=>{
        // 修改状态;
        // reducer 是一个函数；利用reducer的返回值更改当前createStore 中的state；
        state= reducer(state,action);
        listeners.forEach(item=>item())// 让订阅的函数执行；
    }
    dispatch({});// 初始化默认值；

    // 订阅函数；当更改状态时，会默认触发订阅的所有函数；
    // 订阅函数的返回值是一个函数；返回的函数再次执行，取消订阅；
    let subscribe=(fn)=>{
        listeners.push(fn);// 将订阅的函数放入listeners数组中；
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
