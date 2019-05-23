export const getGuests = () =>
  JSON.parse(localStorage.getItem('guests') || '[]')

export const setGuests = guestsList => {
  localStorage.guests = JSON.stringify(guestsList)
}

export const createGuest = guest => {
  const prevGuests = getGuests()
  const nextGuests = [...prevGuests, guest]
  setGuests(nextGuests)
}

export const changeGuestPair = id => {
  const prevGuest = getGuests()
  const updatedPairs = prevGuest.map(guest => {
    if (guest.id === id) {
      return {
        ...guest,
        pair: !guest.pair,
      }
    }
    return guest
  })
  setGuests(updatedPairs)
}

export const deleteGuest = id => {
  const prevGuest = getGuests()
  const deletedGuest = prevGuest.filter(item => {
    return item.id !== id
  })

  setGuests(deletedGuest)
}

export const renameGuest = (id, name) => {
  if (name === '') {
    return deleteGuest(id)
  }
  const prevGuest = getGuests()
  const updatedName = prevGuest.map(item => {
    if (item.id === id) {
      item.name = name
    }
    return item
  })
  setGuests(updatedName)
}
