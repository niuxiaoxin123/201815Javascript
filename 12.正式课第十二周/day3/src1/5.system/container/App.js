import React from "react";
import Nav from "./Nav"
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="container">
            <Nav/>
            {this.props.children}
        </div>
    }
}