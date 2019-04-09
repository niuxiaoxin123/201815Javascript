import React from "react";
import ReactDOM from "react-dom";
//在父组件中使用子组件；
// 父传子： 需要一级一级向下传递；
// 数据只能一级一级向下传递，并且不能更改属性；react的单向数据流；
class Panel extends React.Component{
    render(){
        let {header}=this.props;
        return <div className="container">
            <Header a={header}/>
        </div>
    }
}
class Header extends React.Component{
    render(){
        return <div className="panel-header">{this.props.a}</div>
    }
}
let  obj = {header:"标题"}
ReactDOM.render(<Panel {...obj}/>, document.querySelector("#root"));

