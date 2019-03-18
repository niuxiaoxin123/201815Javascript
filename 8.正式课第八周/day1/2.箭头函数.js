// 1. 箭头函数;
//  this --> 输出了当前函数定义时所在作用中的this；
//  call  apply  bind
/*var fn = function () {

};*/
let  fn =item=>({a:1});

// 1. 形式写法
// 1) 不需要function关键字来定义声明函数，在()和{}用=>连接；
// 2) 如果只有一个参数的话，可以省略小括号；
// 3)  在函数体中如果只有一条语句，可以省略大括号
// 4)  如果返回一个对象，需要在对象的大括号外面套一个小括号；
// 2.执行
// 1. 箭头函数中没有this，会输出当前函数上一级作用域中的this；
// 2. 没有arguments;箭头函数会使用...;
// 3. 不能作为构造函数；不能被new
// 4. 不能作为Generator函数；

/*let  obj = {
    num:1,
    fn:function () {
    console.log(this);// obj
    return ()=>{
        console.log(this);// obj
    }
}
};
//let a = obj.fn;
let f =obj.fn();
f();*/

