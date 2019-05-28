export const SET_VISIBILITY_FILTER = 'app/SET_VISIBILITY_FILTER'

export const visibilityFilters = {
    ALL: 'ALL',
    WITH_PAIRS: 'WITH_PAIRS',
    WITHOUT_PAIRS: 'WITHOUT_PAIRS'
}

export const setVisibilityFilter = payload => ({
  type: SET_VISIBILITY_FILTER,
  payload,
})
