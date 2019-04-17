import React from "react";
let Local = (key) =>(Component)=>{
    return class A extends React.Component{
        constructor(){
            super();
            this.state={val:""};
        }
        componentDidMount(){
            let val = localStorage.getItem(key)|| "";
            this.setState({val})
        }
        render(){
            return <Component {...this.state}/>
        }
    }
}
// 将组件公共逻辑抽离成一个新的组件，在这个新的组件中，把数据以属性的方式传递给每一个子组件；
export default Local;