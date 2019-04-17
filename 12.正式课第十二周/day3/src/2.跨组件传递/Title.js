import React from "react";
import PropTypes from "prop-types"
class Title extends React.Component{
    constructor(){
        super();
    }
    static contextTypes={
        color:PropTypes.string
    }
    render(){
        return <div>
            <p style={{color:this.context.color}}>我爱你中国</p>
        </div>
    }
}
export default Title;
