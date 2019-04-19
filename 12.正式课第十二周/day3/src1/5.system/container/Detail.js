import React from "react";
export default class Detail extends React.Component{
    constructor(props){
        super(props);
        let userList = JSON.parse(localStorage.getItem("users"));
        let id = Number(this.props.match.params.id);
        let current= userList.filter(item=>item.id===id);
        console.log(current);
        this.state={cur:current[0]}
    }
    render(){
        return <div>
            {this.state.cur.username}
        </div>
    }
}