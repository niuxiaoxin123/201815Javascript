import React from "react";
import ReactDOM from "react-dom";
// 属性：是外界传递进来的
// 状态：是自己私有的；
// 属性和状态的改变会影响视图的刷新；
class Count extends React.Component{
    constructor(){
        super();
        // 实例的天生的state值存储的是null;
        console.log(this);
        this.state = {num:1,n:0}
    }
    add=()=>{
        //this.props.a++;// 从外界传递过来的数据不能直接进行修改；
        // setState : 设置当前组件的状态；
        // 如果设置多次相同的状态，会进行合并；执行两次不同的设置状态，后面的状态会把前面的状态进行覆盖；
        // setState : 是异步的；不能保证同步执行；
        // setState : 在生命周期中或者react事件中setState是异步的；
        // 在延迟的回调中或原生DOM事件中，setState就是同步的；
        //this.state.num++;
        //this.setState({num:this.state.num+12})
       /* setTimeout(()=>{
            this.setState({num:this.state.num+1})
            console.log(this.state.num);
        },1000)*/
       // setState : 设置状态两种方式
        // 1. setState({})
        // 2. setState(()=>{})如果下一次的状态需要依赖上一次的状态，那么写成函数形式，不会被覆盖；

            this.setState((prevState)=>({num:prevState.num+1}))
            this.setState((prevState)=>({n:prevState.n+1}))
            //console.log(this.state);
        /*this.setState((prevState)=>({num:prevState.num+1}))
        this.setState((prevState)=>{return {num:prevState.num+1}})*/
        // 如果调用setState改变状态，那么会调用render重新进行渲染；
        // setState:不会将之前空间的地址覆盖，那么改变其中要变化的属性；即便同时改不同的属性，那么也只会调用一次render方法；
    }
    render(){
        console.log(100);
        return <div>
            {this.state.num}
            <button onClick={this.add}>+</button>
            {this.state.n}
        </div>
    }
}


ReactDOM.render(<Count/>,document.querySelector("#root"));
