import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { Counter } from './containers'
import { GuestCreator } from './containers'
import { GuestList } from './containers'
import { Filters } from './containers'
// import { GuestCreator } from './components'
// import { GuestItem } from './components'
// import { Filters } from './components'
// import { Counter } from './components'

// import { getGuests } from './repositories'
// import { createGuest } from './repositories'
// import { changeGuestPair } from './repositories'
// import { deleteGuest } from './repositories'
// import { renameGuest } from './repositories'

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       guestsList: [],
//       guestsCount: 0,
//       activeFilter: 'All',
//     }
//   }

//   componentDidMount() {
//     const guestsList = getGuests()
//     const guestsCount = guestsList.reduce(this._counterGuest, 0)

//     this.setState({ guestsList, guestsCount })
//   }

//   render() {
//     const { guestsList, guestsCount } = this.state

//     return (
//       <div>
//         <GuestCreator addGuest={this._addGuest} />
//         {guestsList.filter(this._filterGuest).map(guest => (
//           <GuestItem
//             key={guest.id}
//             pairChange={this._changePair}
//             deleteGuest={this._deleteGuest}
//             changeName={this._changeName}
//             {...guest}
//           />
//         ))}
//         <Filters setFilter={this._setFilter} />
//         <Counter count={guestsCount} />
//       </div>
//     )
//   }

//   _addGuest = text => {
//     const newGuest = {
//       id: uuid.v4(),
//       name: text,
//       pair: false,
//     }

//     createGuest(newGuest)
//     const guestsList = getGuests()

//     const guestsCount = guestsList.reduce(this._counterGuest, 0)
//     this.setState({ guestsList, guestsCount })
//   }

//   _changePair = id => {
//     changeGuestPair(id)

//     const updatedGuestsList = getGuests()
//     const guestsCount = updatedGuestsList.reduce(this._counterGuest, 0)
//     this.setState({ guestsList: updatedGuestsList, guestsCount })
//   }

//   _setFilter = filter => {
//     this.setState({ activeFilter: filter })
//   }

//   _deleteGuest = id => {
//     const { guestsList } = this.state
//     const deletedGuest = guestsList.filter(guest => guest.id !== id)

//     const guestsCount = deletedGuest.reduce(this._counterGuest, 0)

//     deleteGuest(id)
//     this.setState({ guestsList: deletedGuest, guestsCount })
//   }

//   _changeName = (id, text) => {
//     if (!text) {
//       return this._deleteGuest(id)
//     }

//     const { guestsList } = this.state
//     const updatedName = guestsList.map(guest => {
//       if (guest.id === id) {
//         return {
//           ...guest,
//           name: text,
//         }
//       }
//       return guest
//     })

//     renameGuest(id, text)

//     this.setState({ guestsList: updatedName })
//   }

//   _filterGuest = guest => {
//     const { activeFilter } = this.state

//     if (activeFilter === 'With pairs') {
//       return guest.pair
//     }

//     if (activeFilter === 'Without pairs') {
//       return !guest.pair
//     }

//     return true
//   }

//   _counterGuest = (res, guest) => {
//     const guestValue = guest.pair ? 2 : 1
//     return guestValue + res
//   }
// }

const App = () => (
  <Provider store={store}>
    <>
      <GuestCreator />
      <Filters />
      <GuestList />
      <Counter />
    </>
  </Provider>
)

export default App
