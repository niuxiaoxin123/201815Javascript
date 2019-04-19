import React from "react";
import Local from "./Local"
class UserName extends React.Component{
    constructor(){
        super()
    }
   /*
    componentDidMount(){
        // 当组件挂载完成，触发的钩子函数
        let username = localStorage.getItem("username")||"";
        this.setState({
            username
        })
    }*/
    render(){
        return <div>
            <input type="text" value={this.props.val} onChange={(e)=>{}}/>
        </div>
    }
}
export default Local("username")(UserName);
