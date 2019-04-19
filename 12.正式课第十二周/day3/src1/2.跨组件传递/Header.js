import React from "react";
import Title from "./Title";
import PropTypes from "prop-types"
class Header extends React.Component{
    constructor() {
        super();
    }
    static contextTypes = {
        setColor:PropTypes.func
    }
    render(){
        return <div>
            <button onClick={this.context.setColor}>变色</button>
            <Title/>
        </div>
    }
}
export default Header;
