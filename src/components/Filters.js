import React from 'react'
import {visibilityFilters} from '../constants'

const {ALL, WITH_PAIRS, WITHOUT_PAIRS} = visibilityFilters

const Filters = ({ setVisibilityFilter }) => (
  <div>
    <input
      type="button"
      value="All"
      onClick={() => setVisibilityFilter(ALL)}
    />

    <input
      type="button"
      value="With pairs"
      onClick={() => setVisibilityFilter(WITH_PAIRS)}
    />

    <input
      type="button"
      value="Without pairs"
      onClick={() => setVisibilityFilter(WITHOUT_PAIRS)}
    />
  </div>
)

export default Filters
