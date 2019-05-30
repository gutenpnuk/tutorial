import { createAction } from 'redux-actions'

export const createGuest = createAction('app/CREATE_GUEST')
export const deleteGuest = createAction('app/DELETE_GUEST')
export const editGuest = createAction('app/EDIT_GUEST')
export const changePair = createAction('app/CHANGE_PAIR')
