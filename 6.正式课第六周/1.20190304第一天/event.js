
function EventFire() {}
EventFire.prototype.add = function (type,fn) {
    // this --> 指向EventFire这个类的实例；
    if(!this[type]){
        this[type]= [];
    }
    for(var i=0;i<this[type].length;i++){
        if(fn===this[type][i]){
            return;
        }
    }
    this[type].push(fn);
    return this;// 实现链式调用；

}
EventFire.prototype.fire = function (type) {
    var a = this[type];
    for(var i=0;i<a.length;i++){
        if(typeof a[i]==="function"){
            a[i].call(this);
        }
    }
}
EventFire.prototype.remove = function (type,fn) {
    var  a = this[type];
    for(var i=0;i<a.length;i++){
        if(fn===a[i]){
            a[i] = null;
        }
    }
}
Drag.prototype = new EventFire();
function Drag(ele) {
    this.ele = ele;
    this.ele.onmousedown = this.down.bind(this);
}
Drag.prototype.down = function (e) {
    e = e || window.event;
    this["strX"] = e.clientX;
    this["strY"] = e.clientY;
    this["strL"] = parseFloat(getComputedStyle(this.ele).left);
    this["strT"] = parseFloat(getComputedStyle(this.ele).top);
    document.onmousemove = this.move.bind(this);
    document.onmouseup = this.up.bind(this);
    this.fire("selfdown")
}
Drag.prototype.move = function (e) {
    var changeL = e.clientX - this["strX"];
    var changeT = e.clientY - this["strY"];
    this.ele.style.left = this["strL"]+ changeL + "px";
    this.ele.style.top = this["strT"]+ changeT + "px";
    this.fire("selfmove");
}
Drag.prototype.up = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    this.fire("selfup");
    this.fire("selfmove");
}