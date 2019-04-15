import  * as Types from "../action-type";
export  default {
    add(n){
        return {type:Types.ADD_NUM,n:n}
    },
    min(n){
        return {type:Types.MIN_NUM,n:n}
    }
}