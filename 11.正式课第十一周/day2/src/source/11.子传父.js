import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
class Panel extends React.Component{
    constructor(){
        super();
        this.state={color:"success"}
    }
    change=(color)=>{
        this.setState({color})
    }
    render(){
        return <div className="container">
                <div className={"panel panel-"+this.state.color}>
                    <Header changeBor={this.change}/>
                </div>
        </div>
    }
}
// 父组件中的状态只能父组件自己进行修改；所以将修改state的方法作为属性传递给子组件，当点击子组件的方法时，触发传递过来的函数空间地址；
class Header extends React.Component{
   /* gaibian=()=>{
        //
        this.props.changeBor("default")
    }
    gaibian1=()=>{
        this.props.changeBor("danger")
    }*/
    render(){
        return <div>
            <button className="btn btn-danger" onClick={this.props.changeBor.bind(null,"default")}>改变颜色</button>
            <button className="btn btn-danger" onClick={this.gaibian1}>改变颜色1</button>
        </div>
    }
}
ReactDOM.render(<Panel/>, document.querySelector("#root"))

