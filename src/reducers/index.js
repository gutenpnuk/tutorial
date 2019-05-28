// export { guestsForm } from './root.js'


import guests from './guests'
import visibilityFilter from './filters'
import { combineReducers } from 'redux';

export default combineReducers({
    guests,
    visibilityFilter
})