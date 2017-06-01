import types from './actionTypes'
export function enterChat (userName) {
  return {
    type: types.ENTER_CHAT,
    userName
  }
}
export function userAlreadyExists () {
  return {
    type: types.USER_ALREADY_EXISTS
  }
}
export function welcomeToTheChat () {
  return {
    type: types.WELCOME_TO_THE_CHAT
  }
}
export default {
  enterChat,
  userAlreadyExists,
  welcomeToTheChat
}
