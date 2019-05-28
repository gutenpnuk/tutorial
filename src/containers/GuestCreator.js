import { connect } from 'react-redux'
import { GuestCreator } from '../components'
import { createGuest } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    createGuest: text => {
      dispatch(createGuest(text))
    },
  }
}

const GuestCreatorContainer = connect(undefined, mapDispatchToProps)(GuestCreator)

export default GuestCreatorContainer
