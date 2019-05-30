import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import { createGuest, deleteGuest, editGuest, changePair } from './actions'

import {
  setGuestsLS,
  deleteGuestLS,
  changePairLS,
  editGuestLS,
  getGuestsLS,
} from './repositories'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const guests = getGuestsLS()

const localStorageGuestsEditor = store => next => action => {
  let res = next(action)
  const { guests } = store.getState()
  switch (action.type) {
    case createGuest.toString():
      return setGuestsLS(guests)
    case deleteGuest.toString():
      return deleteGuestLS(action.payload)
    case changePair.toString():
      return changePairLS(action.payload)
    case editGuest.toString():
      return editGuestLS(action.payload)
    default:
      return res
  }
}

const store = createStore(
  rootReducer,
  { guests },
  applyMiddleware(localStorageGuestsEditor),
)

export default store
