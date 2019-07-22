import {combineReducers} from 'redux';
import {getItems} from './ItemReducer'

export default combineReducers({
    items:getItems
    
})