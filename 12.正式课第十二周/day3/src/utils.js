// 下拉刷新的方法；
export  function downFresh(ele,callback){
    // ele : 当前的元素   callback： 回调；
    ele.addEventListener("scroll",function () {
           let  scrollT = ele.scrollTop;
           let  winH = document.body.clientHeight-112;
           let  eleH = ele.scrollHeight;
             console.log(eleH,"eleH");
            // console.log(scrollT,"scrollT");
            // console.log(winH,"winH");
        setTimeout(()=>{
        // 当滚动条距离底部10像素时，触发新的请求；
            if(scrollT+winH+1>eleH){
                callback();
            }
        },200)
    })
}
