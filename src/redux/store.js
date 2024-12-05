import {combineReducers, createStore} from 'redux'
import { productReducer, cartReducer } from './reducers'

const rootReducer = combineReducers ({
    products: productReducer,
    cart: cartReducer,
})

const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store;
 