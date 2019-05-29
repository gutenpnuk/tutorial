import { connect } from 'react-redux'
import { Filters } from '../components'
import { setVisibilityFilter } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: payload => {
      dispatch(setVisibilityFilter(payload))
    },
  }
}

const FiltersContainer = connect(undefined, mapDispatchToProps)(Filters)

export default FiltersContainer