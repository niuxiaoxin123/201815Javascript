// get  post

const HOST = "http://localhost:3001";
export function get(url) {
    // fetch : 用来发请求；是window下新增的API，在IE8一下是不兼容；  fetch 返回一个promise的实例；
    console.log(fetch(HOST + url));
    return fetch(HOST+url).then(res=>res.json())
}