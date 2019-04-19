import {createStore,applyMiddleware} from "redux";
import counter from "./reducer/counter";
// 中间件是第三方模块；
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
// 1.导入中间件  2.应用中间件 applyMiddleware
// createStore 可以传入第二个参数；第二个参数是applyMiddleware函数的返回值；
let store = createStore(counter,applyMiddleware(logger,reduxThunk,reduxPromise));
// 1. logger : 用来打印状态变化前后的state的值；
// 2. redux-thunk : 用来解决异步的动作派发问题；而且在action动作中，函数返回一个回调函数；
// 3. redux-promise : 用来解决派发的动作是一个promise的实例的问题；
export default store;
//
/*
setTimeout(function () {
    console.log(1)
},0)
console.log(25);
new Promise(function (resolve,reject) {
    console.log(50);
    resolve();
}).then(function () {
    console.log(100)
})
*/
