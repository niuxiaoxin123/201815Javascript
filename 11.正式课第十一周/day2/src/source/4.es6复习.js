//es6  class
class Fn{
    constructor(a){
        // this --> 实例
        this.a = a;
    }
    push(){
        // 这就是原型上的方法
        // 这么写不是箭头函数
    }
    pop=()=>{
        // 这是箭头函数在原型上的写法
    }
    // 这样定义的属性都是静态属性；
    static a=1
}
class A extends Fn{
    constructor(){
        super();
    }
}
console.dir(Fn)