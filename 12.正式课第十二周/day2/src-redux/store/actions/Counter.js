import * as Types from "../action-type"
export default {
    add(n){
        return {type:Types.ADD_COUNT,n}
    },
    min(a){
        return {type:Types.MIN_COUNT,a}
    }
}
