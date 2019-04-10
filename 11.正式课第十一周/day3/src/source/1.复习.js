import React from "react";
import ReactDOM from "react-dom";
// react中组件分为两种；
// 1. 内置组件 ： div  p  ul  li  span
// 2. 自定义组件： function和class定义的组件；
function Div(props) {
    // function定义的组件，那么函数体中的this指向undefined；
    //console.log(this);// undefined
    return <ul>
        {props.name}
        <Header></Header>
    </ul>
}
// 在工作中，一般情况下都会使用class定义组件
// class定义的组件有this，state,生命周期；
// 属性和状态的更改都会引起视图的刷新；
// 属性： 是从外界传递进来的；是不可以发生更改的；
// 状态： 自己私有的；是可以进行更改；
// setState方法
// 1.传对象  this.setState({name:2})
// 2.传函数  this.setState(prevState=>({name:prevState.name+1}))
// prevState代表上一次的状态；
//propType
// 校验类型
// 默认值
// 组件的数据传递
// 父传子
// 子传父

class  Header extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        console.log(this.props.name);
        this.state={name:1}
    }
    render(){
        // render 是必须要有的；
        console.log(this.props.name);
    }
}
let  obj = {name:"2019"}
ReactDOM.render(<Header {...obj}></Header>, document.querySelector("#root"))
