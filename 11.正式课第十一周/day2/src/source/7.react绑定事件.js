import React from "react";
import ReactDOM from "react-dom";
/*function add1() {
    console.log(this);// undefined
    console.log(200);
}*/
// 如果给元素绑定的事件的方法是一个普通的原型上的方法，那么this会指向undefined；
// 元素的事件行为on+大写的事件行为；
class Num extends React.Component{
    add=()=>{
        console.log(100)
        console.log(this.props.a);
    }
    render(){
        // this --> 实例
        // add放到了类的原型上
        return <div>
            {/*react 中的事件行为都是驼峰的命名方式*/}
            <button onClick={this.add}>+</button>
        </div>
    }
}
ReactDOM.render(<Num a="1"/>, window.root)
