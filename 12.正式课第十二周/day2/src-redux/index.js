import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter"
import Compute from "./component/Compute"
import {Provider} from "react-redux";
import store from "./store/index"
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
            <Compute/>
        </div>
    </Provider>,
document.querySelector("#root"));
