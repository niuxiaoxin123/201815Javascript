import * as Types from "../action-types";
let initState = {
    currentType:"all",
    home:[],
    lesson:{
        list :[],// 接收后端传递过来的课程数据
        offset:0,// 每次获取的索引
        limit:5,// 每次获取的个数
        hasMore:true// 当前是否还有数据
    }
}
export default function home(state=initState,action) {
    console.log(state.lesson.offset);
    switch (action.type){
        case Types.CHANGE_TYPE:
            return {...state,currentType:action.val}
        case Types.SET_SLIDERS:
            return {...state,home:action.payload}
        case Types.SET_LESSONS:
            return {...state,lesson:{...state.lesson,...action.payload,list:[...state.lesson.list,...action.payload.list],offset:state.lesson.offset+5}}
    }
    return state;
}