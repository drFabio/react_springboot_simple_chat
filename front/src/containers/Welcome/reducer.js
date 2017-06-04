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
    case types.EMPTY_USER_NAME:
      return state.set('error', action.error)
    case types.USER_NAME_ACCEPTED:
      return initial
    default:
      return state
  }
}
export default welcomeReducer
