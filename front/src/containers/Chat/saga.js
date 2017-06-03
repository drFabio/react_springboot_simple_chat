import { call, select, takeEvery, fork, put } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import {socketConnection} from 'utils/socketConnection'

const makeSelectChat = (state) => state.chat

function createMessageSource () {
  let deferred = null
  const onMessage = (message) => {
    if (deferred) {
      deferred.resolve(message)
      deferred = null
    }
  }
  socketConnection.subscribe(onMessage)
  return {
    getMessage () {
      if (!deferred) {
        deferred = {}
        deferred.promise = new Promise((resolve) => {
          deferred.resolve = resolve
        })
      }
      return deferred.promise
    }
  }
}
export function * handleMessage () {
  const state = yield select(makeSelectChat)
  const message = state.get('outgoingMessage')
  yield call(socketConnection.sendMessage.bind(socketConnection), message)
}
export function * listenToMessages () {
  const messageSource = createMessageSource()
  while (true) {
    const message = yield call(messageSource.getMessage)
    yield put(actions.receivedMessage(message.message, message.senderName))
  }
}
export function * chatSaga () {
  yield [
    takeEvery(types.SEND_MESSAGE, handleMessage),
    fork(listenToMessages)
  ]
}
export default chatSaga
