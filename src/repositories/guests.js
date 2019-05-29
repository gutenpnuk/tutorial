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

export const changePair = id => {
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
  const deletedGuest = prevGuest.filter(guest => {
    return guest.id !== id
  })

  setGuests(deletedGuest)
}

export const editGuest = ({id, text}) => {
  if (!text) {
    return deleteGuest(id)
  }
  const prevGuest = getGuests()
  const updatedName = prevGuest.map(guest => {
    if (guest.id === id) {
      return {
        ...guest,
        name: text,
      }
    }
    return guest
  })
  setGuests(updatedName)
}
