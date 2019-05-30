import { handleActions } from 'redux-actions'
import { createGuest, deleteGuest, editGuest, changePair } from '../actions'
import uuid from 'uuid'

const guests = handleActions(
  {
    [createGuest]: (state, { payload }) => {
      return [
        ...state,
        {
          id: uuid.v4(),
          name: payload,
          pair: false,
        },
      ]
    },
    [deleteGuest]: (state, { payload }) => {
      return state.filter(guest => guest.id !== payload)
    },
    [changePair]: (state, { payload }) => {
      return state.map(guest =>
        guest.id === payload
          ? {
              ...guest,
              pair: !guest.pair,
            }
          : guest,
      )
    },
    [editGuest]: (state, { payload }) => {
      const { id, text } = payload
      if (!text) {
        return state.filter(guest => guest.id !== id)
      }
      return state.map(guest => {
        if (guest.id === id) {
          return {
            ...guest,
            name: text,
          }
        }
        return guest
      })
    },
  },
  { guests: [] },
)

export default guests
