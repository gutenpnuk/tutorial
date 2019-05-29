import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { Counter } from './containers'
import { GuestCreator } from './containers'
import { GuestList } from './containers'
import { Filters } from './containers'

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
