import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import { CREATE_GUEST, DELETE_GUEST, CHANGE_PAIR, EDIT_GUEST } from './actions'
import {
  setGuests,
  deleteGuest,
  changePair,
  editGuest,
  getGuests,
} from './repositories'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const guests = getGuests()

const logger = store => next => action => {
  let res = next(action)
  const { guests } = store.getState()
  switch (action.type) {
    case CREATE_GUEST:
      return setGuests(guests)
    case DELETE_GUEST:
      return deleteGuest(action.payload)
    case CHANGE_PAIR:
      return changePair(action.payload)
    case EDIT_GUEST:
      return editGuest(action.payload)
    default:
      return res
  }
}

const store = createStore(rootReducer, { guests }, applyMiddleware(logger))

export default store
