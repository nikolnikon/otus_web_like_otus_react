import { combineReducers } from 'redux'
import courseReducer from './courseReducers'

const rootReducer = combineReducers({courseReducer})
export default rootReducer;