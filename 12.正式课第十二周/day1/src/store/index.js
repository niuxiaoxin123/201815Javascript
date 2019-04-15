// createStore这个方法在这里执行；并且将其返回值store导出
import {createStore,combineReducers} from "../component/redux";

import counter from "./reducers/Counter"
import todo from "./reducers/Todo"
let reducers = combineReducers({
    counter,
    todo
})
// createStore 执行时，传入的是combineReducers的返回值；createStore 需要实参一定是函数；
let store = createStore(reducers);
export default store;
