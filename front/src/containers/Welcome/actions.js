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
export function welcomeToTheChat (welcomeMessage) {
  return {
    type: types.WELCOME_TO_THE_CHAT,
    welcomeMessage
  }
}
export default {
  enterChat,
  userAlreadyExists,
  welcomeToTheChat
}
