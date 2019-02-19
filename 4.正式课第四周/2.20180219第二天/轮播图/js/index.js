// 1. 获取元素
var swiper = document.getElementById("swiper");
var  focus = document.getElementById("focus");
var divs = swiper.getElementsByTagName("div");
var oLis = focus.getElementsByTagName("li");

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