/*export let g = 10;
export let f = 11;
// 导出一个对象
let a=b=>b;*/
function a(b) {
    return b;
}
for(var i=0;i<10;i++){
    (function (i) {

    })(i)
};
let obj = {...a,...b};
Object.assign();