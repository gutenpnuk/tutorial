import React from 'react'
import styled from 'styled-components'


const StyledCounter = styled.p`
  margin: 20px
`

const Counter = ({ count }) => {
  return (
    <div>
      <StyledCounter>Total guests: {count}</StyledCounter>
    </div>
  )
}

export default Counter
