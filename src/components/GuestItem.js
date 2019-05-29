import React from 'react'

class GuestItem extends React.PureComponent {
  constructor(props) {
    super(props)

    const { name } = props

    this.state = {
      isEdit: false,
      text: name,
    }
  }

  render() {
    const { name, pair } = this.props
    const { isEdit, text } = this.state

    return (
      <div>
        {isEdit ? (
          <input
            type="text"
            onChange={this._typingName}
            onKeyPress={this._enterPress}
            onBlur={this._formBlur}
            value={text}
            autoFocus
          />
        ) : (
          <p onDoubleClick={this._nameClick}>{name}</p>
        )}

        <input type="checkbox" checked={pair} onChange={this._pairClick} />

        <input type="button" value="delete" onClick={this._deleteClick} />
      </div>
    )
  }

  _nameClick = () => {
    this.setState({ isEdit: true })
  }

  _pairClick = () => {
    const { changePair } = this.props
    const { id } = this.props
    changePair(id)
  }

  _deleteClick = () => {
    const { deleteGuest } = this.props
    const { id } = this.props
    deleteGuest(id)
  }

  _typingName = ({ target: { value } }) => {
    this.setState({ text: value })
  }

  _enterPress = ({ key }) => {
    const { editGuest, id } = this.props
    const { text } = this.state
    if (key === 'Enter') {
      this.setState({ isEdit: false })
      editGuest({ id, text })
    }
  }

  _formBlur = () => {
    const { editGuest, id } = this.props
    const { text } = this.state
    this.setState({ isEdit: false })
    editGuest({ id, text })
  }
}

export default GuestItem
