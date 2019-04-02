let http = require("http");
let fs = require("fs");
let path = require("path");
let url = require("url")
http.createServer(function (req,res) {
    // console.log(1);
    //这个回调函数，当客户端请求一次，就会执行这个回调函数依次；
    // 当浏览器需要访问HTML页面时，会把HTML页面中的内容读取，并且响应给客户端；然后浏览器需要把相应回来的内容进行渲染，渲染的时候，一旦遇到href\src\ajax都会向服务器再次发送一个请求；
    /*console.log(url.parse(req.url,true));*/
    let {pathname}=url.parse(req.url,true);
    //console.log(pathname);
    fs.readFile(path.join(__dirname,pathname),"utf-8",function (err,data) {
        res.end(data);
    })
}).listen(8080);