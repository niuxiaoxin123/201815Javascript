let http = require("http");
// 不能在同一个服务器的同一个端口上起两个不同的服务；一台服务器一个端口，只能启动一个服务；
// 端口号会被占用；
let  url = require("url");
let server = http.createServer(function (req,res) {
    //console.log(req.url);
    //console.log(100)
    // 只要修改服务端的代码，都要重新启动；
    // url.parse : 用于处理路径；
    // 如果传一个true，那么会把传递进来参数放到query这个属性名对应属性值上；并且是一个对象；
    console.log(url.parse(req.url,true));
}).listen(8080);
