import types from './actionTypes'
export function enterChat (userName) {
  return {
    type: types.ENTER_CHAT,
    userName
  }
}
export function userAlreadyExists (error) {
  return {
    type: types.USER_ALREADY_EXISTS,
    error
  }
}
export default {
  enterChat,
  userAlreadyExists
}
