import axios from 'axios'

const initialState = {
    user: {},
    isLoggedIn: false
}

//action creators

// const ACTION_CREATOR = 'ACTION_CREATOR'
const LOGIN_USER = "LOGIN_USER"


//action functions

//export function stuff(state){
//     return {
//         type: ACTION_CREATOR,
//         payload: state
//     }
// }
export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}


export default function userReducer(state = initialState, action){
    switch(action.type){
        // case ACTION_CREATOR + "_FULFILLED":
        //     return {...state, otherState = action.payload}
        case LOGIN_USER + "_FULFILLED":
            return {...state, user: action.payload, isLoggedIn: true}
        default:
            return state
    }
}