let http=require("http");
// createServer : 创建一个服务；
let server = http.createServer(function (req,res) {
    /*console.log(req);// 请求体
    console.log(res);// 响应体
    console.log(1001);*/
    // res.end : 结束该请求；
    // end：可以把后端整理的数据扔给前端；客户端可以接受到res.end方法传递过来的数据；
    //res.end("1000nihenshuai")
});
// listen : 监听一个8080的端口；
// 端口号1-65535；
server.listen(8080,function () {
    // 当端口监听成功，则立即执行该方法；执行一次；
    console.log(101);
});