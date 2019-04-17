import React from "react";
import PropTypes from "prop-types";
// store = createStore();{getState,dispatch,subscribe}
// Provider : 将redux中的store的三个方法传递给当前Provider的所有的子孙组件；
class Provider extends React.Component{
    constructor(){
        super();
    }
    static childContextTypes={
        store:PropTypes.object
    }
    getChildContext(){
        return {store:this.props.store}
    }
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}
let connect=(mapStateToProps,mapDispatchToProps)=>(Component)=>{
   return class A extends React.Component{
       static contextTypes = {
           store:PropTypes.object
       }
       componentDidMount(){
           this.context.store.subscribe(()=>{
               this.setState(mapStateToProps(this.context.store.getState()))
           })
       }
       constructor(props,context){
           // props：接收到的是行间属性；
           // context : 传递是当前组件的上下文；
           /*console.log(props);
           console.log(context);*/
           super();
           this.state=mapStateToProps(context.store.getState())
       }
       render(){
           return <Component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
       }
   }
}
export {Provider,connect}


