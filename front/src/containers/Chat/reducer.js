import { Map, List } from 'immutable'
import types from './actionTypes'

export const initial = new Map({
  messagesList: new List()
})
function chatReducer (state = initial, action) {
  switch (action.type) {
    case types.SOMEONE_ENTERED:
      return state.update('messagesList', messages => messages.push(`${action.userName} joined the room`))
    case types.SOMEONE_LEFT:
      return state.update('messagesList', messages => messages.push(`${action.userName} left the room`))
    case types.RECEIVED_MESSAGE:
      return state.update('messagesList', messages => messages.push(`${action.userName} - : ${action.message}`))
    case types.SEND_MESSAGE:
      return state.set('outgoingMessage', action.message)
    default:
      return state
  }
}
export default chatReducer
