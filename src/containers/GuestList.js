import { connect } from 'react-redux'
import { GuestList } from '../components'
import { deleteGuest, changePair, editGuest } from '../actions'
import { visibilityFilters } from '../constants'

const {ALL, WITH_PAIRS, WITHOUT_PAIRS} = visibilityFilters

const getVisibleGuests = (guests, filter) => {
  switch (filter) {
    case ALL:
      return guests
    case WITH_PAIRS:
      return guests.filter(guest => guest.pair)
    case WITHOUT_PAIRS:
      return guests.filter(guest => !guest.pair)
    default:
      return guests
  }
}

const mapStateToProps = state => {
  return {
    guests: getVisibleGuests(state.guests, state.visibilityFilter),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteGuest: payload => {
      dispatch(deleteGuest(payload))
    },
    changePair: payload => {
      dispatch(changePair(payload))
    },
    editGuest: payload => {
      dispatch(editGuest(payload))
    },
  }
}

const GuestListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestList)

export default GuestListContainer
