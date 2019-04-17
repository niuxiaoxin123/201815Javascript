import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import App from "./container/App";
import Home from "./container/Home"
import Profile from "./container/Profile"
import User from "./container/User";
import "bootstrap/dist/css/bootstrap.css"
ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/user" component={User}/>
                {/*<Redirect to="/" exact/>*/}
            </Switch>
        </App>
    </Router>,
document.querySelector("#root")
)
;