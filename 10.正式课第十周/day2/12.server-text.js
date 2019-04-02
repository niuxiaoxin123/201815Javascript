
let http = require("http");
http.createServer(function (req,res) {
    // 如果服务端直接传输文本中含有汉字，那么在客户端会显示乱码；
    // 可以设置响应头，通知客户端按照对应content-type类型进行接收；
    // 在服务端接收到请求之后，在返回给客户端数据之前，会先发送给客户端一个响应头，响应头中包含了一些当前内容的信息，客户端就会按照对应类型进行解析；
    // res.setHeader:设置响应头；
    res.setHeader("Content-Type","text/plain;charset=utf-8")
    res.end("你很好")
}).listen(8080)