import { connect } from 'react-redux'
import { GuestCreator } from '../components'
import { createGuest } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    createGuest: payload => {
      dispatch(createGuest(payload))
    },
  }
}

const GuestCreatorContainer = connect(undefined, mapDispatchToProps)(GuestCreator)

export default GuestCreatorContainer
