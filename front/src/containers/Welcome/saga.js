import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'
import * as types from './actionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as actions from './actions'
import {socketConnection} from 'utils/socketConnection'
const makeSelectWelcome = (state) => state.welcome

export function * handleChatEnter () {
  const state = yield select(makeSelectWelcome)
  const userName = state.get('userName')
  try {
    const response = yield call(socketConnection.connectWithName.bind(socketConnection), userName)
    if (response.entered) {
      yield put(actions.welcomeToTheChat(response.successMessage))
    } else {
      yield put(actions.userAlreadyExists(response.errorMessage))
    }
  } catch (err) {
    yield put(actions.userAlreadyExists(err))
  }
}

export function * welcomeSaga () {
  const watcher = yield takeLatest(types.ENTER_CHAT, handleChatEnter)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}
export default welcomeSaga
