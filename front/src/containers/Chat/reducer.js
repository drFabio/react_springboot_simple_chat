import { Map, List } from 'immutable'
// import types from './actionTypes'

export const initial = new Map({
  messagesList: new List()
})
function chatReducer (state = initial, action) {
  switch (action.type) {
    default:
      return state
  }
}
export default chatReducer
