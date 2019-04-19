import * as Types from "../action-types";
export default {
    add(m){
        /// action的动作不能直接是异步的；
        // let a ;
        // setTimeout(()=>{
        //    a={type:Types.ADD_COUNT,m}
        // },2000);
        // return a;// undefined
        // 在工作中，一般通过异步请求数据，都在action中去派发；
        // return function (dispatch,getState) {
        //     // dispatch : store.dispatch;
        //     // getState  : store.getState;
        //     //console.log(dispatch);
        //     console.log(getState());
        //     setTimeout(()=>{
        //         dispatch({type:Types.ADD_COUNT,m})
        //     },2000)
        // }
    },
    min(n){
        // payload : 载荷；接收一个promise的实例；可以调用resolve和reject；
        return  {
            type:Types.MIN_COUNT,
            payload : new Promise(function (resolve,reject) {
                    setTimeout(()=>{
                        if(Math.random()>0.5){
                            resolve(10)
                        }else{
                            reject(20)
                        }
                    },1000)
            }).then(function (a) {
                return a;
            })
        }
    }
}
// 如果直接返回一个promise的实例；那么只能调用从pending到成功的状态；
/*
return new Promise(function (resolve,reject) {
    //console.log(11);
    /// 把resolve的实参作为dispatch的动作；
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve({type:Types.MIN_COUNT,n:10})
        }else{
            reject({type:Types.MIN_COUNT,n:20})
        }
    },1000)
})*/
