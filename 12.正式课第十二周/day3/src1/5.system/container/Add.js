import React from "react";
export default class Add extends React.Component{
    constructor(){
        super();
    }
    addUser=()=>{
        // 向localstoreage新增用户；
        // 取出来
        let userList = JSON.parse(localStorage.getItem("users"))||[];
        userList.push({id:Math.random(),username:this.refs.x.value})
        localStorage.setItem("users",JSON.stringify(userList));
        this.refs.x.value="";
        // push : 根据路径跳转到对应的路由上；
        this.props.history.push("/user/list");
    }
    render(){
        return <div>
            <input type="text" className="form-control" ref="x"/>
            <button className="btn btn-danger" onClick={this.addUser}>新增用户</button>
        </div>
    }
}