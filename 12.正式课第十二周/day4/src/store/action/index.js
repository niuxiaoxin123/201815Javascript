import * as Types from "../action-types";
export default {
    add(){
        // 这个action是不支持异步的；
        //
        /*setTimeout(()=>{
            return {type:Types.ADD_COUNT}
        },2000)*/
        return function (dispatch,getState) {
            // dispatch : store.dispatch
            // getState : store.getState
            // getState获取的是上一次的状态；
            setTimeout(()=>{
                dispatch({type:Types.ADD_COUNT})
            },2000)
            console.log(getState());
        }
    },
    min(){
        return {
            type:Types.MIN_COUNT,
            // 支持派发的动作是一个promise的实例
            // payload
            payload:new Promise(function (resolve,reject) {
                setTimeout(()=>{
                    if(Math.random()>0.5){
                        resolve(100)
                    }else{
                        reject(200)
                    }
                },2000)
            }).then(function (a) {
                console.log(13);
                return a;
            })
        }
    }
}
