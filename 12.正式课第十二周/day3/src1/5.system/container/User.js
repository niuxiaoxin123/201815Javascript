import React from "react";
import {HashRouter,Route,Switch,Link} from "react-router-dom";
import Add from "./Add"
import List from "./List"
import Detail from "./Detail"
export default class User extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <div className="col-md-3">
                <ul className="nav">
                    <li><Link to="/user/add">新增用户</Link></li>
                    <li><Link to="/user/list">用户列表</Link></li>
                </ul>
            </div>
            <div className="col-md-9">
                <HashRouter>
                    <Switch>
                        <Route path="/user/add"  component={Add}/>
                        <Route path="/user/list" exact component={List}/>
                        <Route path="/user/list/:id" component={Detail}/>
                    </Switch>
                </HashRouter>


            </div>



        </div>
    }
}