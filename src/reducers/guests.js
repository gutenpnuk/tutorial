import uuid from 'uuid'

import { CREATE_GUEST, DELETE_GUEST, CHANGE_PAIR, EDIT_GUEST } from '../actions'

const guests = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_GUEST:
      return [
        ...state,
        {
          id: uuid.v4(),
          name: payload,
          pair: false,
        },
      ]

    case DELETE_GUEST:
      return state.filter(guest => guest.id !== payload)

    case CHANGE_PAIR:
      return state.map(guest => {
        if (guest.id === payload) {
          return {
            ...guest,
            pair: !guest.pair,
          }
        }
        return guest
      })

    case EDIT_GUEST:
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

    default:
      return state
  }
}

export default guests
