import React from 'react'
import GuestItem from './GuestItem'

const GuestList = ({ guests, deleteGuest, changePair, editGuest }) => {
  return (
    <div>
      {guests.map(guest => (
        <GuestItem
          key={guest.id}
          {...guest}
          deleteGuest={deleteGuest}
          changePair={changePair}
          editGuest={editGuest}
        />
      ))}
    </div>
  )
}

export default GuestList
