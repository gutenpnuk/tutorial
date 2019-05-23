import React from 'react'

const Filters = ({ setFilter }) => (
  <div>
    <input
      type="button"
      value="All"
      onClick={({ target: { value } }) => setFilter(value)}
    />

    <input
      type="button"
      value="With pairs"
      onClick={({ target: { value } }) => setFilter(value)}
    />

    <input
      type="button"
      value="Without pairs"
      onClick={({ target: { value } }) => setFilter(value)}
    />
  </div>
)

export default Filters
