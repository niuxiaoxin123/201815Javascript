import * as Types from "../action-types"
let initState = {num:0};
function counter(state=initState,action) {
    switch (action.type){
        case Types.ADD_COUNT:
            return {num:state.num+action.m};
        case Types.MIN_COUNT:
            return {num:state.num-action.payload}
    }
    return state;
}
export default counter;