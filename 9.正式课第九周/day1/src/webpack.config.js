// webpack 的配置文件；
// webpack.config.js是运行在node环境下的；
// node是个部署在服务器上的一个浏览器；
// 配置这个对象；

console.log(__dirname);
const path  = require("path");// node中天生自带一个模块；处理路径的；
const HtmlWebpackPlugins = require("html-webpack-plugin")
// 模块： 一个js就是一个模块；
    module.exports={
        mode:"development",// production :生产模式（压缩之后的代码）  development： 开发模式；
        entry:"./src/main.js",// 入口文件
        output:{
            // 出口；把打包后的文件放到哪个文件下；
            path:path.resolve(__dirname,"dist"),
            filename:"bundle.js"
        },
        module:{
            // loader: 解析器；test： 检测出相应后缀名的文件；use:使用哪些解析器
            // npm i babel-loader --save-dev;
            // babel-loader: 将es6编译成es5
            // exclude : 排除；exclude：node_modules下的文件不需要编译；
            rules:[
                {test:/.js$/,use:"babel-loader",exclude:/node_modules/},
                // style-loader:把编译好的css最后插入到html;
                {test:/.css$/,use:["style-loader","css-loader"]},
                {test:/.less$/,use:["style-loader","css-loader","less-loader"]},
                // url-loader:有个file-loader进行依赖；
                {test:/.(png|jpg|jpeg|gif)$/,use:"url-loader"}
            ]
        },
        // 插件；
        plugins:[
            new HtmlWebpackPlugins({
                template:"./src/index.html"
            })
        ]
    }
    // npm install -D babel-loader@7 babel-core babel-preset-env webpack  webpack-cli  style-loader css-loader  less-loader file-loader  url-loader html-webpack-plugin


