import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"
class  Student extends React.Component{
   /* static propTypes={
        // 属性名是要校验的属性
        // 属性值是对该数据类型的要求；
        a:PropTypes.number.isRequired
        /!*optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalSymbol: PropTypes.symbol*!/
    }
    static defaultProps={
        // 这个对象中存储的是默认值；如果外界没有传递过来数据，会走默认值；如果外界传进来，会走外面的值；
        a:100
    }*/
    constructor(props){
        // 当使用该组件时，会让此处的constructor执行；
        // 组件被调用一次，那么执行一次；
        // 这个函数中，不能直接使用实例身上的props属性，此刻是undefined；
        // props会接收到组件行间属性传递过来的属性；
        super();
        console.log(100);
        console.log(props);
    }
    render(){
        return <div>{this.props.a}</div>
    }
}


ReactDOM.render(<div>
    <Student a="1"/>
</div>,document.querySelector("#root"));
