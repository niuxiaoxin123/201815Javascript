import React from "react";
import ReactDOM from "react-dom";
class Sum extends React.Component{
    constructor(){
        super();
        this.state={a:1,b:2}
    }
   /* change1=(e)=>{
        let num1 = Number(e.target.value);
        this.setState({a:num1});
    };
    change2=(e)=>{
        let num2 = Number(e.target.value);
        this.setState({b:num2});
    };*/
   change=(key,e)=>{
       // key : a  也可能是b;
        this.setState({[key]:Number(e.target.value)})
   }
    render(){
        return <div>
           {/* <input type="text" value={this.state.a} onChange={this.change1} />+
            <input type="text" value={this.state.b} onChange={this.change2} />*/}
            <input type="text" value={this.state.a} onChange={(e)=>{this.change("a",e)}}/>
            <input type="text" value={this.state.b} onChange={(e)=>{this.change("b",e)}}/>
            {this.state.a+this.state.b}
        </div>
    }
}
ReactDOM.render(<Sum/>, document.querySelector("#root"));
