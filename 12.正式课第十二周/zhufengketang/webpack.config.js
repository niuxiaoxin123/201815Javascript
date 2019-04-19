// webpack : 打包压缩工具；运行在node环境下；所以遵循common.js规范；
//
let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry :"./src/index.js",
    output :{
        filename:"bundle.js",// 生成的文件名；
        path:path.resolve("./dist")// 生成的文件夹名字；
    },
    module:{
        // test : 校验后缀名;test的属性值是正则；
        // use : 使用什么模块
        // exclude : 排除
        // style-loader : 自动插入style标签，并插入到页面中；
        // loader : 解析时从右向左；
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(png|jpg|gif)$/,use:"file-loader"}
        ]
    },
    plugins:[
        // 是webpack的插件；webpack将打包后的js出入到此文件中；
        new htmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}
