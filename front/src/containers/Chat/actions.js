import types from './actionTypes'

export function someoneEntered (userName) {
  return {
    type: types.SOMEONE_ENTERED,
    userName
  }
}
export function someoneLeft (userName) {
  return {
    type: types.SOMEONE_LEFT,
    userName
  }
}
export function receivedMessage (message, senderName) {
  return {
    type: types.RECEIVED_MESSAGE,
    message,
    senderName
  }
}
export function sendMessage (message) {
  return {
    type: types.SEND_MESSAGE,
    message
  }
}
export function enterChatRoom (welcomeMessage, usersList) {
  return {
    type: types.ENTER_CHAT_ROOM,
    welcomeMessage,
    usersList
  }
}
export default {
  someoneEntered,
  someoneLeft,
  receivedMessage,
  sendMessage
}
