import React from "react";
import img from "../../images/profile.png";
import "./index.less";
import {Link} from "react-router-dom";
export default class Login extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="login">
            <div className="login-header">
                <i className="iconfont icon-fanhui"></i>
                登录
            </div>
            <div className="login-photo">
                <img src={img} alt=""/>
            </div>
            <ul className="form">
                <li><input type="text" placeholder="请输入用户名"/></li>
                <li><input type="text" placeholder="请输入密码"/></li>
                <li><span className="goRegister"><Link to="/register">前往注册</Link></span></li>
                <li><button>登录</button></li>
            </ul>
        </div>
    }
}
