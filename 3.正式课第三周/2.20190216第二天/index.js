// 1. 获取到所有的ul;
var oUl = document.getElementsByTagName("ul");
//将类数组集合转化为数组；
oUl = [...oUl];
var data;
// 2. 通过ajax获取数据
var  xhr = new XMLHttpRequest();
xhr.open("get","data.txt",false);
xhr.onreadystatechange = function () {
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        data = JSON.parse(xhr.responseText);
    }
}
xhr.send();


// 3.绑定数据
function bindHtml() {
    for(var i=0;i<50;i++){
        // 产生一个0-7之间的随机整数；
        var num = Math.round(Math.random()*7);
        var  curData = data[num];
        var  oLi = document.createElement("li");
        // 创建a标签，并放入li中；
        var a = document.createElement("a");
        a.innerHTML="采集";
        a.href="javascript:;";
        oLi.appendChild(a);
        // 创建img标签，放入li中；
        var img = document.createElement("img");
        img.setAttribute("trueImg",curData.src);
        img.style.height = Math.round(Math.random()*(350-200)+200)+"px";
        oLi.appendChild(img);
        // 创建p元素
        var op = document.createElement("p");
        op.innerHTML=curData.title;
        oLi.appendChild(op);
        // 把li放入最短的ul中；
        oUl.sort(function (a,b) {
            return a.scrollHeight-b.scrollHeight
        });
        oUl[0].appendChild(oLi);
    }
}
bindHtml();


var  imgs = document.getElementsByTagName("img");
// 3.实现所有图片的懒加载；
function delayImgs() {
    for(var i=0;i<imgs.length;i++){
        checkImg(imgs[i])
    }
}
//校验当前一张是否需要加载真实图片
function checkImg(curImg) {
    if(curImg.load){
        // 如果当前图片的load属性的属性值是true，那么说明该图片已经加载完成；不需要再进行下面的判断；
        return;
    }
    var curH = curImg.offsetHeight;
    var curT = utils.offset(curImg).top;
    var winH = utils.win("clientHeight");
    var winT = utils.win("scrollTop");
    var trueAdd = curImg.getAttribute("trueImg");
    if(winH + winT>= curH + curT){
        // 验证路径是否是正确存在的；
        var newImg = document.createElement("img");
        newImg.src=trueAdd;
        newImg.onload=function () {
            curImg.src=trueAdd;
            curImg.load=true;
            fadeIn(curImg)
        }
    }
}
function fadeIn(curImg) {
    utils.css(curImg,"opacity",0.3);
    var timer = setInterval(function () {
        var curOp = Number(utils.css(curImg,"opacity"));
        curOp+=0.1;
        if(curOp>=1){
            utils.css(curImg,"opacity",1);
            clearInterval(timer);
            return;
        }
        utils.css(curImg,"opacity",curOp);
    },200)
}
delayImgs();


// 5.当滚动条将要滚动到底部时，重新执行bindHtml;
var container = document.getElementById("container");
window.onscroll = function () {
    delayImgs();
    var  winH = utils.win("clientHeight");
    var  winT = utils.win("scrollTop");
    var allH = container.scrollHeight;
    if(winH+winT +100 >= allH){
        bindHtml();
    }
}

