import {legacy_createStore as createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import  ThunkMiddleware  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const reducer = combineReducers({

})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
)

export default store;