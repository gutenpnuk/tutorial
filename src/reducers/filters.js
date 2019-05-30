import { handleAction } from 'redux-actions'
import { setVisibilityFilter } from '../actions'
import { visibilityFilters } from '../constants'

const { ALL } = visibilityFilters

const visibilityFilter = handleAction(
  setVisibilityFilter,
  (state, { payload }) => {
    return payload
  },
  ALL,
)

export default visibilityFilter
