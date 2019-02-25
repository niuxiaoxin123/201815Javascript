// 1. 获取元素
var swiper = document.getElementById("swiper");
var  focus = document.getElementById("focus");
var divs = swiper.getElementsByTagName("div");
var oLis = focus.getElementsByTagName("li");
var outer = document.getElementById("outer");
var left = document.getElementById("left");
var right = document.getElementById("right");

// 2. 通过ajax获取数据
function bindHtml() {
    var data;
    var  xhr = new XMLHttpRequest();
    xhr.open("get","banner.json",false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
            data=JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    var str=``;
    for(var i=0;i<data.length;i++){
        str+=`<div><img src="${data[i].img}" alt=""></div>`
    }
    swiper.innerHTML = str;
    swiper.appendChild(divs[0].cloneNode(true));
    oLis[0].classList.add("select");
}
bindHtml();

//3.实现轮播
var step=0;
function autoMove() {
    step++;
    if(step===5){
        // 如果step已经等于5，此时autoMove的目标应该是第二张；
        utils.css(swiper,"left",0);
        step=1;
    }
    zfAnimate(swiper,{left:-800*step},300);
    changeTip(step);
}
// autoMove 每3000毫秒执行一次；
var timer = setInterval(autoMove,3000);
// 4. 鼠标滑上和滑出
outer.onmouseover = function () {
    clearInterval(timer);
}
outer.onmouseout = function () {
    timer = setInterval(autoMove,3000);
}
// 5.焦点跟随变化
function changeTip(n) {
    // n 接收传递过来的step；step判断当前显示的是第几张
    for(var i=0;i<oLis.length;i++){
        if(n===i){
            oLis[i].classList.add("select")
        }else{
            oLis[i].classList.remove("select")
        }
        // 当n=4时,说明当前显示的是第五张图片，应该让第一个li新增class的select
        if(n===4){
            oLis[0].classList.add("select");
        }
    }
}
// 5. 焦点实现切换图片轮播
for(let i=0;i<oLis.length;i++){
    oLis[i].onclick = function () {
        zfAnimate(swiper,{left:-800*i},300)
        changeTip(i);
        step=i;
    }
}
// 6.左右切换轮播
right.onclick = function () {
    autoMove();
}
left.onclick = function () {
    step--;
    if(step===-1){
        // 当step===-1时,让swiper回到最后一张；
        utils.css(swiper,"left",-3200);
        step=3;
    }
    zfAnimate(swiper,{left:-800*step},300);
    changeTip(step)
}
