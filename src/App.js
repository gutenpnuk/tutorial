import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { Counter } from './containers'
import { GuestCreator } from './containers'
import { GuestList } from './containers'
import { Filters } from './containers'
import styled from 'styled-components'

const MailFlex = styled.div`
  display: -webkit-flex;
  -webkit-flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 50%;
  background-color: lightgray
`


const App = () => (
  <MailFlex>
    <Provider store={store}>
      <>
        <GuestCreator />
        <Filters />
        <GuestList />
        <Counter />
      </>
    </Provider>
  </MailFlex>
)

export default App
