import { Map } from 'immutable'
import types from './actionTypes'

export const initial = new Map({
  entering: false,
  success: null
})
function welcomeReducer (state = initial, action) {
  switch (action.type) {
    case types.ENTER_CHAT:
      return state.withMutations((state) => {
        return state.set('userName', action.userName)
          .set('entering', true)
          .delete('error')
      })
    case types.USER_ALREADY_EXISTS:
      return state.withMutations((state) => {
        return state.set('entering', false)
          .set('error', action.error)
      })
    case types.WELCOME_TO_THE_CHAT:
      return state.withMutations((state) => {
        return state.set('entering', false)
          .set('success', true)
          .set('welcomeMessage', action.welcomeMessage)
      })
    default:
      return state
  }
}
export default welcomeReducer
