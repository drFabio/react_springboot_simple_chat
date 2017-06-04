import types from './actionTypes'
export function enterChat (userName) {
  if (userName === '') {
    return {
      type: types.EMPTY_USER_NAME,
      error: 'Please, pick an user name'
    }
  }
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
export function userNameAccepted () {
  return {
    type: types.USER_NAME_ACCEPTED
  }
}
export default {
  enterChat,
  userAlreadyExists,
  userNameAccepted
}
