import {index} from "../../action/actionType"

const defaultState = {
    activeIndex:1,
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case index:
            let indexState = JSON.parse(JSON.stringify(state));
            indexState.activeIndex = action.value
            return indexState
    }
    return state
}