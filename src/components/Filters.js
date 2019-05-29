import React from 'react'
import {visibilityFilters} from '../constants'
import styled from 'styled-components'

const Input = styled.input`
  margin: 5px;
  text-color: black;
  border-radius: 20px
  transition-duration: 0.4s;

  &:hover {
    background-color: mediumspringgreen
  }
`

const {ALL, WITH_PAIRS, WITHOUT_PAIRS} = visibilityFilters


const Filters = ({ setVisibilityFilter }) => (
  <div>
    <Input
      type="button"
      value="All"
      onClick={() => setVisibilityFilter(ALL)}
    />

    <Input
      type="button"
      value="With pairs"
      onClick={() => setVisibilityFilter(WITH_PAIRS)}
    />

    <Input
      type="button"
      value="Without pairs"
      onClick={() => setVisibilityFilter(WITHOUT_PAIRS)}
    />
  </div>
)

export default Filters
