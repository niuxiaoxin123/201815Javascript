import React from "react";
import TodoHeader from "./TodoHeader"
import TodoBody from "./TodoBody"
import TodoFooter from "./TodoFooter";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <TodoHeader/>
                        </div>
                        <div className="panel-body">
                            <TodoBody/>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}
