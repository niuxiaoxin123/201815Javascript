import * as Types from "../action-types";
import {getSliders,getLessons} from "../../api/home"
// 在真实的项目中；一般在action中发送请求；并且将请求到的数据设置给全局store中的属性；
export default {
    changeType(val){
        return {type:Types.CHANGE_TYPE,val}
    },
    getSlider(){
        return function (dispatch,getState) {
            // dispatch : store.dispatch
           getSliders().then(function (data) {
               // 这一个异步的请求操作；当请求数据成功之后，才会调用该方法；将数据设置给store中的state；
               dispatch({
                   type:Types.SET_SLIDERS,
                   payload:data
               })
           })
        }
    },
    getLessonList(){
        return function (dispatch,getState) {
            let state = getState();
            //console.log(state);
            let category = state.home.currentType;
            let offset = state.home.lesson.offset;
            let limit = state.home.lesson.limit;
            let hasMore = state.home.lesson.hasMore;
            if(hasMore){
                // 如果当前还有其他值；可以继续发送请求；如果没有；不能在发请求；请求到空数组会覆盖原有的数据；
                // 300 : 让浏览器重新计算完当前页面的DOM之后，

                    getLessons(category,offset,limit).then(function (data) {
                        // 把请求到的数据去更新store中的state；store中数据发生变化；就会导致视图刷新；
                        console.log(data);
                        dispatch({
                            type:Types.SET_LESSONS,
                            payload:data
                        })
                    })
            }

        }
    }

}
