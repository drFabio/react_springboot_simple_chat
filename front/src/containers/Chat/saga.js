import { call, select, takeEvery, fork, put } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import {socketConnection} from 'utils/socketConnection'

const makeSelectChat = (state) => state.chat

function createMessageSource () {
  let deferradMessage = null
  const onMessage = (message) => {
    if (deferradMessage) {
      deferradMessage.resolve(message)
      deferradMessage = null
    }
  }
  let deferredEnter = null
  const onUserEnter = (message) => {
    if (deferredEnter) {
      deferredEnter.resolve(message)
      deferredEnter = null
    }
  }
  let deferredLeft = null
  const onUserLeft = (message) => {
    if (deferredLeft) {
      deferredLeft.resolve(message)
      deferredLeft = null
    }
  }
  socketConnection.subscribe(onMessage, onUserEnter, onUserLeft)
  return {
    getMessage () {
      if (!deferradMessage) {
        deferradMessage = {}
        deferradMessage.promise = new Promise((resolve) => {
          deferradMessage.resolve = resolve
        })
      }
      return deferradMessage.promise
    },
    getUserEnter () {
      if (!deferredEnter) {
        deferredEnter = {}
        deferredEnter.promise = new Promise((resolve) => {
          deferredEnter.resolve = resolve
        })
      }
      return deferredEnter.promise
    },
    getUserLeft () {
      if (!deferredLeft) {
        deferredLeft = {}
        deferredLeft.promise = new Promise((resolve) => {
          deferredLeft.resolve = resolve
        })
      }
      return deferredLeft.promise
    }
  }
}
export function * handleMessage () {
  const state = yield select(makeSelectChat)
  const message = state.get('outgoingMessage')
  yield call(socketConnection.sendMessage.bind(socketConnection), message)
}
export function * listenToMessages (messageSource) {
  while (true) {
    const message = yield call(messageSource.getMessage)
    console.log('received message', message)
    yield put(actions.receivedMessage(message.message, message.senderName))
  }
}
export function * listenToEnter (messageSource) {
  while (true) {
    const message = yield call(messageSource.getUserEnter)
    console.log('received enter', message)
    yield put(actions.someoneEntered(message.userName))
  }
}
export function * listenToUserLeave (messageSource) {
  while (true) {
    const message = yield call(messageSource.getUserLeft)
    console.log('received Left', message)
    yield put(actions.someoneLeft(message.userName))
  }
}
export function * chatSaga () {
  const messageSource = createMessageSource()
  yield [
    takeEvery(types.SEND_MESSAGE, handleMessage),
    fork(listenToMessages, messageSource),
    fork(listenToEnter, messageSource),
    fork(listenToUserLeave, messageSource)

  ]
}
export default chatSaga
