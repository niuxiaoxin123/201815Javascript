import {createStore} from "redux";
import reducers from "./reducers/index"
let store = createStore(reducers);

window._store = store;
export default store;



//  组件
//  action-type
//  actions
//  reducer