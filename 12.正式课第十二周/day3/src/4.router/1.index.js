import React from "react";
import ReactDOM from "react-dom";
// HashRouter : 是react-router-dom这个模块中的一个组件
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
// 创建组件；
// 创建组件两种方式；函数创建、class创建；
let Home=()=><div>Home</div>;
let List =()=><div>List</div>
let Detail = ()=><div>Detail</div>

// HashRouter : 是套在所有路由的外面，里面包含了所有的组件
// Route ： 用来配置路径和组件的对应关系；其中path属性代表路径，component代表组件；
ReactDOM.render(
    <HashRouter>
        {/*Route组件是用来配置路径和组件名称；*/}
        {/*exact=true:只有当路径完全匹配，才会显示对应的组件*/
        }
        {/*只要路径中含有这个path的属性值，那么该组件就会显示*/}
        {/*只要匹配到一个组件，那么将不再向下匹配；*/}
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/home"  component={Home}/>
            <Route path="/List" component={List}/>
            <Route path="/Detail" component={Detail}/>
            <Redirect to="/home"/>
        </Switch>
    </HashRouter>,
document.querySelector("#root"));