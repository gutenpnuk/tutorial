import { combineReducers } from 'redux'
import guests from './guests'
import visibilityFilter from './filters'

const rootReducer = combineReducers({
  guests,
  visibilityFilter
})

export default rootReducer
