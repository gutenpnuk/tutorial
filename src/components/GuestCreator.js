import React from 'react'

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
      <div>
        <input
          type="text"
          value={text}
          onChange={this._typingName}
          onKeyPress={this._enterPress}
        />
      </div>
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
