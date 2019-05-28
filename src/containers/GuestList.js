import { connect } from 'react-redux'
import { GuestList } from '../components'
import { deleteGuest, changePair, editGuest } from '../actions'
import { visibilityFilters } from '../actions'

const getVisibleGuests = (guests, filter) => {
  switch (filter) {
    case visibilityFilters.ALL:
      return guests
    case visibilityFilters.WITH_PAIRS:
      return guests.filter(guest => guest.pair)
    case visibilityFilters.WITHOUT_PAIRS:
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
    deleteGuest: id => {
      dispatch(deleteGuest(id))
    },
    changePair: id => {
      dispatch(changePair(id))
    },
    editGuest: (id, text) => {
      dispatch(editGuest({id, text}))
    },
  }
}

const GuestListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestList)

export default GuestListContainer
