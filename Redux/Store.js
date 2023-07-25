import {legacy_createStore as createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import  ThunkMiddleware  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'


import cartItem from './Reducers/CartItem'

const reducer = combineReducers({
    cartItem: cartItem
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
)

export default store;