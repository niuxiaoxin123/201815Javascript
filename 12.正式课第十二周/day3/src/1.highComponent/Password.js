import React from "react";
import Local from "./Local"
class Password extends React.Component{
    constructor(){
        super()
        //this.state={password:""}
    }
   /* componentDidMount(){
        // 当组件挂载完成，触发的钩子函数
        let password = localStorage.getItem("password")||"";
        this.setState({
            password
        })
    }*/
    render(){
        return <div>
            <input type="text" value={this.props.val} onChange={()=>{}}/>
        </div>
    }
}
export default Local("password")(Password);