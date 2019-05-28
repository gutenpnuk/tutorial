import { visibilityFilters, SET_VISIBILITY_FILTER } from '../actions'

const { ALL } = visibilityFilters

const visibilityFilter = (state = ALL, { type, payload }) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload
    default:
      return state
  }
}

export default visibilityFilter