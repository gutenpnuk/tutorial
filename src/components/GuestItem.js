import React from 'react'
import styled from 'styled-components'

const MainItem = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-bottom: 1px solid black;
  margin: 0 10px 0;
  transition-duration: 0.4s;

  :hover {
    background-color: mediumspringgreen
  }
`

const NamePlaceholder = styled.div`
  -webkit-flex-grow: 1;
  margin: 5px;
`

const NameEditor = styled.input`
  -webkit-flex-grow: 1;
  margin: 5px;
`

const PairChecker = styled.input`
  -webkit-flex-grow: 0,9;
  margin: 5px;
`

const DeleteButton = styled.input`
  margin: 5px;
  border-radius: 20px;
  transition-duration: 0.4s;
  :hover {
    background-color: crimson
  }
`

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
      <MainItem>
        {isEdit ? (
          <NameEditor
            type="text"
            onChange={this._typingName}
            onKeyPress={this._enterPress}
            onBlur={this._formBlur}
            value={text}
            autoFocus
          />
        ) : (
          <NamePlaceholder onDoubleClick={this._nameClick}>
            {name}
          </NamePlaceholder>
        )}

        <p>Pair:</p>

        <PairChecker type="checkbox" checked={pair} onChange={this._pairClick} />

        <DeleteButton type="button" value="X" onClick={this._deleteClick} />
      </MainItem>
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
