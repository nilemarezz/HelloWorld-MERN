import {combineReducers} from 'redux';
import {getItems} from './ItemReducer'
import ErrorReducer from './ErrorReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    items:getItems,
    error: ErrorReducer,
    auth: AuthReducer
})