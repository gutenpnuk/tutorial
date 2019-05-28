import { combineReducers } from 'redux'
import { guestsList } from './guests'
import { activeFilter } from './filters'

export const guestsForm = combineReducers({
  guestsList,
  activeFilter
})
