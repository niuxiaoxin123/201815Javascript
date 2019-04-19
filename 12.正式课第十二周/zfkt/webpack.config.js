// 这是一个运行在node环境下的一个配置文件；
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./src/index.js",
    output:{
        filename:"build.js",
        path:path.resolve("./dist")// 绝对路径
    },
    module:{
        rules:[
            {test:/.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/.css$/,use:["style-loader","css-loader"]},
            {test:/.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/.(png|jpg|jpeg)$/,use:"file-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}
