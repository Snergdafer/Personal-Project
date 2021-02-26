import {createStore, applyMiddleware, combineReducers} from 'redux'
import userReducer from './userReducer'
import promiseMiddleware from 'redux-promise-middleware'
import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer'

const rootDucer = combineReducers ({
    userReducer,
    cartReducer,
    itemsReducer
})

export default createStore(rootDucer, applyMiddleware(promiseMiddleware))