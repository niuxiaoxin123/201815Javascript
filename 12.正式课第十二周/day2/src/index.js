import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/index"
import App from "./component/App"
ReactDOM.render(
    <Provider store={store}>
        {/*组件一定要被Provider组件包裹起来；*/}
       <App/>
    </Provider>,
document.querySelector("#root"));
