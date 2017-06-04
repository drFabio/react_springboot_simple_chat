import { Map, List, Set } from 'immutable'
import types from './actionTypes'

export const initial = new Map({
  messagesList: new List(),
  userList: new Set()
})
function chatReducer (state = initial, action) {
  switch (action.type) {
    case types.SOMEONE_ENTERED:
      return state.withMutations((mutableState) => {
        return mutableState
          .update(
            'messagesList',
            messages => messages.push({body: `${action.userName} joined the room`, isJoin: true})
          )
          .update(
            'userList',
            userList => userList.add(action.userName).sort()
          )
      })

    case types.SOMEONE_LEFT:
      return state.withMutations((mutableState) => {
        return mutableState
          .update(
            'messagesList',
            messages => messages.push({body: `${action.userName} left the room`, isLeft: true})
          )
          .update(
            'userList',
            userList => userList.delete(action.userName)
          )
      })

    case types.RECEIVED_MESSAGE:
      return state.update('messagesList', messages => messages.push({body: `${action.message}`, senderName: action.senderName}))
    case types.SEND_MESSAGE:
      return state.set('outgoingMessage', action.message)
    default:
      return state
  }
}
export default chatReducer
