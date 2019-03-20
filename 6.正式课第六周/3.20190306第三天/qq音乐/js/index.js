let  music = $("#music");// 音乐的audio
let  musicBtn = $("#musicBtn");
let main = $(".main");
let wrapper = $(".wrapper");
let header = $(".header");
let footer = $(".footer");
let timer;
// 1. 让当前页面的main自适应；
//  1) : 获取屏幕的可视窗口的总高度；
//  2) ： 总高度-header的高度-footer的高度
function computedMain() {
    // px;
    let winH= document.documentElement.clientHeight;
    let  headerH = header[0].offsetHeight;
    let footerH = footer[0].offsetHeight;
    console.log(headerH,footerH);
    let val = parseFloat(document.documentElement.style.fontSize);// 转数字；
    let curH = (winH-headerH-footerH)/val-0.6+"rem";
    main.css("height",curH);
}
computedMain();
// 当页面的窗口大小发生改变时，会触发这个方法；
window.addEventListener("resize",computedMain);

// 2. 请求数据；
$.ajax({
    url:"json/lyric.json",
    type:"get",
    async:false,
    success:function (data) {
        bindHtml(data.lyric)
    }
})
 // 3.绑定数据
function bindHtml(data) {
    data = data.replace(/&#(\d+);/g,function (res,a) {
        //console.log(res);
        // 第一个参数： 代表大正则捕获的内容；
        // 第二个参数： 代表小正则捕获的内容；
        //console.log(a);
        switch (a){
            case "32":
                return " ";
            case "40":
                return "(";
            case "41":
                return ")";
            case "45":
                return "-"
        }
        return res;// 如果a不是特殊的值；直接返回捕获的内容即可；
    });
    let ary =[];// 把获取到的值统一放到数组中；
    data.replace(/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)(?:&#10;)?/g,function(res,min,sec,val){
        // 将捕获的数据（分钟，秒，歌词）
       ary.push({
           min:min,
           sec:sec,
           val:val
       });
    });
    // 循环拼接数据；
    let  str = ``;
    for(let i=0;i<ary.length;i++){
        let cur = ary[i];
        str+=`<p data-min="${cur.min}" data-sec="${cur.sec}" >${cur.val}</p>`;
    }
    wrapper.html(str);
    // 播放音乐
    music[0].play();
    musicBtn.addClass("select");
    timer = setInterval(computedTime,1000);
}
// 点击btn可以暂停音乐
// tap : zepto的绑定点击事件的方法；
musicBtn.tap(function () {
    // 如果音乐暂停，执行播放；
    if(music[0].paused){
        music[0].play();
        musicBtn.addClass("select");
        timer = setInterval(computedTime,1000)
        return;
    }
    // 暂停音乐；
    music[0].pause();
    musicBtn.removeClass("select");
    clearInterval(timer);
});
let  curT = 0;
let flag = 0;
//  计算滚动条
function computedTime() {
    // 获取当前音乐的播放了多长时间和总时间；时间是秒数；
    let current = Math.floor(music[0].currentTime);
    let duration = Math.floor(music[0].duration);

    let cur =formatTime(current);
    let dur = formatTime(duration);
    $("#start").html(cur);
    $("#end").html(dur);
    if(current>=duration){
        // 当时间满足之后；清定时器；
        clearInterval(timer);
        musicBtn.removeClass("select");
        return;
    }
    let  a = cur.split(":");
    let min = a[0];
    let sec = a[1];
    // 计算滚动条的位置
    $(".lineBg").css("width",current/duration*100+"%");
    // 获取所有的p标签；然后遍历其中和当前时间相同的那个P标签；
    let allP = document.getElementsByTagName("p");
    for(let i=0;i<allP.length;i++){
        let curP = allP[i];
        let minP = curP.getAttribute("data-min");
        let secP = curP.getAttribute("data-sec");
        if(min===minP && sec===secP){
            $(curP).addClass("select").siblings().removeClass("select");
            flag++;
            if(flag>5){
                curT-=0.84;// 一个行高是0.84rem;
                wrapper.css("top",curT+"rem");
            }

        }
    }
}
// 格式化时间
function formatTime(time){
    let  min = Math.floor(time/60);
    let sec = time-min*60;
    //如果计算出结果小于10;则补0；
    min = min <10?"0"+min:min;
    sec = sec<10?"0"+sec:sec;
    return min+":"+sec;
}








