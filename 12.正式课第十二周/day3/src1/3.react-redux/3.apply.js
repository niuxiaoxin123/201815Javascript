import React from "react";
import ReactDOM from "react-dom";
import {Provider,connect} from "./2.react-redux"
let  store = {getState:function(){}}
class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>

        </div>
    }
}
let App1 = connect()(App)
ReactDOM.render(
    <Provider store={store}>
            <App1/>
    </Provider>,
document.querySelector("#root")
)
;
