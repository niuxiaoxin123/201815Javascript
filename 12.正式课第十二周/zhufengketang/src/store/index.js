import {createStore,applyMiddleware,combineReducers} from "redux";
import home from "./reducer/home"
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
let reducer = combineReducers({
    home
})
let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
export default store;
