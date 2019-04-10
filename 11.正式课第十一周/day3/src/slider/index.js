import React from "react";
import ReactDOM from "react-dom";
import Slider from "./components/Slider";
import "./index.css"
// webpack运行在node环境下；webpack识别绝对路径；

let images = [require("./images/1.jpg"),require("./images/2.jpg"),require("./images/3.jpg"),require("./images/1.jpg")]
ReactDOM.render(<Slider imgs={images}/>, document.querySelector("#root"));