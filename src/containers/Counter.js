import { connect } from 'react-redux'
import { Counter } from '../components'

const mapStateToProps = state => {
  return {
    count: state.guests.reduce((res, guest) => {
        const guestValue = guest.pair ? 2 : 1
        return res + guestValue
    }, 0),
  }
}

const CounterContainer = connect(mapStateToProps)(Counter)

export default CounterContainer
