import React from "react";
import ReactDOM from "react-dom";

class  Counter extends React.Component{
    static defaultProps={
        name:"你好"
    }
    constructor(props){
        super(props);
        // 一般情况下用初始化状态；
        this.state={num:0}
        console.log(this.props.name);
        console.log("1.constructor");
    }
    // react 的生命周期钩子函数；在初始化react实例时，默认会调用的钩子函数；
    componentWillMount(){// 组件将要挂载；
        console.log("2.componentWillMount")
        //console.log(this.refs.a);
        // setState在componentWillMount是异步的；
        /*this.setState({num:1})
        console.log(this.state);*/
    }
    componentDidMount(){// 组件挂载完成；
        // 可以在此钩子函数下，获取DOM;
        console.log("4.componentDidMount")
        /*this.setState({num:2})
        console.log(this.state);*/
        //this.setState(prevState=>({num:prevState.num+1}))
        //console.log(this.state);
    }
    shouldComponentUpdate(nextProps,nextState){
        // 当前钩子函数，如果返回true，那么会继续调用render重新渲染视图；如果返回false，则不再调用render；
        // 每当修改状态一次，就会执行一次
        // nextProps : 代表的下一次的属性
        // nextState : 代表下一次的状态；
        /*console.log(nextProps);
        console.log(nextState);*/
        console.log("5.shouldComponentUpdate")
        return true;
        //如果return false，那么状态已经发生改变，只不过，没有重新渲染视图；下面的钩子函数都不再执行了；
    }
    componentWillUpdate(){// 组件将要更新；
        console.log("6.componentWillUpdate")
    }
    componentDidUpdate(){// 组件更新之后的钩子函数；
        console.log("7.componentDidUpdate")
        // 不仅需要自己的组件更新之后，而且还要子组件的render渲染完之后，会触发这个钩子函数；
    }
    componentWillUnmount(){// 卸载之前调用的钩子函数
        // 经常用于；清除定时器，取消事件的订阅；
        // 当组件卸载完成之后；会把根元素下的组件统统删除，页面也不再显示；
        console.log("8.componentWillUnmount")
    }
    add=()=>{
        // setState :每执行一次会调用一次render，重新渲染视图；
        // this.setState(prevState=>({num:prevState.num+1}))
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
    }
    render(){
        // 将虚拟的DOM渲染到真实的DOM中；
        console.log("3.render");
        return <div>
            <button ref="a" onClick={this.add}>+</button>
            {this.state.num}
            <Child n={this.state.num}/>
        </div>
    }
}
//初始化组件执行的钩子函数 defaultProps-->constructor -->componentWillMount--> render-->componentDidMount
// 数据更新    shouldComponentUpdate--> componentWillUpdate-->render-->componentDidUpdate
class Child extends React.Component{
    constructor(){
        super();
        this.state={a:1}
    }
    componentWillMount(){
        console.log("child componentWillMount")
    }
    componentWillReceiveProps(newProps){
        // 第一次渲染组件，该钩子函数并不会执行；
        console.log(newProps);// 新的属性
        console.log("child componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        // 当组件的属性或者状态发生变化时，都会触发该钩子函数；
        console.log("child shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        console.log("child componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    render(){
        console.log("child render")
        return <div>
            <p>{this.props.n}</p>
        </div>
    }
}
// 当父组件中数据更新之后，那么会首先触发componentWillReceiveProps-->shouldComponentUpdate-->componentWillUpdate--> render-->componentDidUpdate-->父组件的componentDidUpdate
ReactDOM.render(<Counter a="1"/>, document.querySelector("#root"))
