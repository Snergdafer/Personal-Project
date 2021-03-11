

const initialState = {
        terms: ''
    }
    

//action creators

// const ACTION_CREATOR = 'ACTION_CREATOR'
const UPDATE_TERMS = 'UPDATE_TERMS'


//action functions

//export function stuff(state){
//     return {
//         type: ACTION_CREATOR,
//         payload: state
//     }
// }
export function updateSearch(terms){
    console.log(terms)
    return {
        type: UPDATE_TERMS,
        payload: terms
    }
}


export default function itemsReducer(state = initialState, action){
    switch(action.type){
        // case ACTION_CREATOR + "_FULFILLED":
        //     return {...state, otherState = action.payload}
        case UPDATE_TERMS:
            return {...state, terms: action.payload}
        default:
            return state
    }
}