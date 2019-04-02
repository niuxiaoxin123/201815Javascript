console.log(100)
// console.log(window)// 报错
// 在node的环境下，不存在window这个对象；但是在node环境中存在最大的对象global；
// console.log(global);
console.log(__dirname);// E:\珠峰培训\课件\2018年第十五期\Javascript201815\10.正式课第十周\day2
// 1. __dirname : 当前文件夹的绝对路径
// 2. __filename : 当前文件的绝对路径；
// 3. require : 导入的方法;导入模块；可以省略后缀.js  .json;但是相对路径的./不能省略；
// 4. module : 模块
// 5. exports : 导出；

console.log(module);
console.log(exports);

// require的返回值就是导入模块中导出的那个对象；
let {fn} = require("./6.sum.js")
console.log(__filename);
//sum.fn();
fn();


// 在NODE中，每一个JS 文件都是一个模块；会在JS最外层套一个闭包函数
/*(function (module,exports,require,__dirname,__filename) {

})()*/

// Node中模块分为三种： 核心模块，第三方模块，自定义模块；
//