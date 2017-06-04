import { call, put, select, takeLatest, take } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import {socketConnection} from 'utils/socketConnection'
import { push, LOCATION_CHANGE } from 'react-router-redux'
import * as chatActions from '../Chat/actions'

const makeSelectWelcome = (state) => state.welcome
export function * handleChatEnter () {
  const state = yield select(makeSelectWelcome)
  const userName = state.get('userName')
  try {
    const response = yield call(socketConnection.connectWithName.bind(socketConnection), userName)
    if (response.entered) {
      yield put(chatActions.enterChatRoom(response.successMessage, response.userList))
      yield put(push('/chat'))
    } else {
      yield put(actions.userAlreadyExists(response.errorMessage))
    }
  } catch (err) {
    console.error('Something went wrong', err)
  }
}

export function * clearState () {
  yield put(actions.userNameAccepted())
}
export function * welcomeSaga () {
  yield [
    takeLatest(types.ENTER_CHAT, handleChatEnter),
    takeLatest(LOCATION_CHANGE, clearState)
  ]
}
export default welcomeSaga
