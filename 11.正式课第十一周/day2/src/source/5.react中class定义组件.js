import React,{Component} from "react";
import ReactDOM from "react-dom";
// Component是react核心库中的导出的一个类；
// class 不能作为定义类来使用
class Build extends Component{
    render(){
        console.log(this);
        // 把组件的行间属性打包，放在了当前实例的props属性上；如果需要获取值，找到实例的props属性；
        //
        return <div>{this.props.morning}</div>;
    }
}
// 类声明的组件有状态，this，生命周期；
/*class B{
    constructor(){

    }
}
new B;
class A extends React.Component{
    constructor(){
        super()
    }
    render(){
        return 123
    }
}*/
let obj = {morning:"豆浆",noon:"盖饭"};
ReactDOM.render(<Build {...obj}/>,document.querySelector("#root"));