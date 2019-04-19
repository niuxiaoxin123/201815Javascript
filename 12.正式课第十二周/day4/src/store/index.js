import {createStore,applyMiddleware} from "redux";
import reducers from "./reducer/counter.js";
// 引入中间件;logger 用于打印更改状态的日志；
import logger from "redux-logger";

// redux-thunk;
import reduxThunk from "redux-thunk"
// 实现派发异步动作；返回函数；将派发异步动作这个才做教给这个函数来控制；
import reduxPromise from "redux-promise"

let store = createStore(reducers,applyMiddleware(logger,reduxThunk,reduxPromise));
export default store;
