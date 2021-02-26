import axios from 'axios'

const initialState = {
    placeHolder: []
}

//action creators

// const ACTION_CREATOR = 'ACTION_CREATOR'



//action functions

//export function stuff(state){
//     return {
//         type: ACTION_CREATOR,
//         payload: state
//     }
// }



export default function cartReducer(state = initialState, action){
    switch(action.type){
        // case ACTION_CREATOR + "_FULFILLED":
        //     return {...state, otherState = action.payload}
        default:
            return state
    }
}