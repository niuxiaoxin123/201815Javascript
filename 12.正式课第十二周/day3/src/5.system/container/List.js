import React from "react";
import {Link} from "react-router-dom";
export default class List extends React.Component{
    constructor(){
        super();
        this.state={user:JSON.parse(localStorage.getItem("users"))}
    }
    render(){
        return <div className="col-md-12">
                <table className="table-bordered table">
                    <thead>
                        <tr>
                            <td >id</td>
                            <td>用户名</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.user.map((item,index)=>{
                        return <tr key={index}>
                            <td><Link to={`/user/list/${item.id}`}>{item.id}</Link></td>
                            <td>{item.username}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
        </div>
    }
}