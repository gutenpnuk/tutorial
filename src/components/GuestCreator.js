import React from 'react'
import styled from 'styled-components'

const MainAdder = styled.div`
  margin: 10px;
  border: 1px solid black
`

const NameForm = styled.input`
  width: 200px
`

class GuestCreator extends React.Component {
  constructor() {
    super()

    this.state = {
      text: '',
    }
  }

  render() {
    const { text } = this.state
    return (
      <MainAdder>
        <div>
          <NameForm
            type="text"
            placeholder="Enter guest name..."
            value={text}
            onChange={this._typingName}
            onKeyPress={this._enterPress}
          />
        </div>
      </MainAdder>
    )
  }

  _typingName = ({ target: { value } }) => {
    this.setState({ text: value })
  }

  _enterPress = ({ key }) => {
    const { createGuest } = this.props
    if (key === 'Enter') {
      this.setState({ text: '' })
      createGuest(this.state.text)
    }
  }
}

export default GuestCreator
