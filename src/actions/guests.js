export const CREATE_GUEST = 'app/CREATE_GUEST'
export const DELETE_GUEST = 'app/DELETE_GUEST'
export const EDIT_GUEST = 'app/EDIT_GUEST'
export const CHANGE_PAIR = 'app/CHANGE_PAIR'

export const createGuest = payload => ({ type: CREATE_GUEST, payload })
export const deleteGuest = payload => ({ type: DELETE_GUEST, payload })
export const editGuest = payload => ({ type: EDIT_GUEST, payload })
export const changePair = payload => ({ type: CHANGE_PAIR, payload })
