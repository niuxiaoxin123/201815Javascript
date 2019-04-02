// 核心模块：不需要重新下载的；当你下载node时，也跟着一起下载的模块都是核心模块；
// fs 模块；文件操作模块；用来读写文件的模块；
let fs = require("fs");
let path = require("path");

// fs.readFile(path,编码格式,fn)
// 当fs把文件读取完毕时，会调用此回调函数；
// path.join : 将传进来的两个路径进行拼接；
// readFile默认读取出来一个buffer数据类型；
// 一个buffer是由两个数字或字母；0-9a-f;
// 数字和字母是一个对一个，那么汉字是三个buffer对应一个汉字；
// readfFile是一个异步的方法，不会等待读取完成，才执行下面的代码；
/*fs.readFile(path.join(__dirname,"./a.txt"),"utf-8",function (err,data) {
    // 在回调中默认传递两个参数；第一个参数是报错信息；第二个参数是读取的数据；
    console.log(err);// 报错信息；
    console.log(data);
})*/
// 同步读取文件readFileSync;
// 同步读取文件内容的代码；会把读取的内容作为返回值return出来；
// readFileSync(path,编码格式)
/*let con = fs.readFileSync(path.join(__dirname,"./a.txt"),"utf-8");
console.log(con);
console.log(100);*/

// 2. writeFile   writeFileSync
// writeFile:异步写入文件；
// writeFileSync : 同步写入内容；
// 新的内容会把之前内容进行覆盖；
// writeFile(path,要写入的内容，编码格式，回调函数);
// 如果写入成功，就会执行个函数；
/*fs.writeFile(path.join(__dirname,"./a.txt"),"aaabbcc我爱你","utf-8",function(err,data){
    console.log(err);
    console.log(data);
})*/
/*fs.writeFileSync(path.join(__dirname,"./a.txt"),"aaabbcc","utf-8");*/

// 3.appendFile;
// 向文件的末尾追加内容；
// fs.appendFile(path.join(__dirname,"./a.txt"),"eeff","utf-8",function(err,data){
//     console.log(err);
//     console.log(data);
// })

/*fs.writeFile(path.join(__dirname,"./a.txt"),"eeffttttttrrrrrrrrrrrrrrr tttttttttttte柔柔弱弱若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若若ttt","utf-8",function(err,data){
    console.log("第一次");
})
fs.writeFile(path.join(__dirname,"./a.txt"),"eeff","utf-8",function(err,data){
    console.log("第二次");
});*/

fs.readFile(path.join(__dirname,"./lyric.json"),"utf-8",function (err,data) {
    console.log("第二次");
});

fs.readFile(path.join(__dirname,"./a.txt"),"utf-8",function (err,data) {
    console.log("第一次");
})

