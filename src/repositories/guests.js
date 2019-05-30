export const getGuestsLS = () =>
  JSON.parse(localStorage.getItem('guests') || '[]')

export const setGuestsLS = guestsList => {
  localStorage.guests = JSON.stringify(guestsList)
}

export const createGuestLS = guest => {
  const prevGuests = getGuestsLS()
  const nextGuests = [...prevGuests, guest]
  setGuestsLS(nextGuests)
}

export const changePairLS = id => {
  const prevGuest = getGuestsLS()
  const updatedPairs = prevGuest.map(guest => {
    if (guest.id === id) {
      return {
        ...guest,
        pair: !guest.pair,
      }
    }
    return guest
  })
  setGuestsLS(updatedPairs)
}

export const deleteGuestLS = id => {
  const prevGuest = getGuestsLS()
  const deletedGuest = prevGuest.filter(guest => {
    return guest.id !== id
  })

  setGuestsLS(deletedGuest)
}

export const editGuestLS = ({ id, text }) => {
  if (!text) {
    return deleteGuestLS(id)
  }
  const prevGuest = getGuestsLS()
  const updatedName = prevGuest.map(guest => {
    if (guest.id === id) {
      return {
        ...guest,
        name: text,
      }
    }
    return guest
  })
  setGuestsLS(updatedName)
}
