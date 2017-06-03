/* global Stomp */

import SockJS from 'sockjs-client'
const SOCKET_URL = 'http://localhost:3000/chatExample'

export class SocketConnector {
  _ensureConnection () {
    if (this._connected) {
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      const socket = new SockJS(SOCKET_URL)
      this._client = Stomp.over(socket)
      this._client.connect({}, (frame) => {
        this._connected = true
        resolve()
      },
      () => {
        this._connected = false
      })
    })
  }
  isConnected () {
    return this._connected
  }
  subscribe (messageCallback, userEnterCallback, userLeftCallback) {
    this._messageCallback = messageCallback
    this._userEnterCallback = userEnterCallback
    this._userLeftCallback = userLeftCallback
  }
  connectWithName (name) {
    return this._ensureConnection().then(() => {
      return new Promise((resolve) => {
        this._client.subscribe('/user/topic/registerResponse', (response) => {
          return resolve(JSON.parse(response.body))
        })
        this._client.subscribe('/topic/messages', (response) => {
          if (this._messageCallback) {
            this._messageCallback(JSON.parse(response.body))
          }
        })
        this._client.subscribe('/topic/userEnter', (response) => {
          if (this._userEnterCallback) {
            this._userEnterCallback(JSON.parse(response.body))
          }
        })
        this._client.subscribe('/topic/userLeft', (response) => {
          if (this._userEnterCallback) {
            this._userLeftCallback(JSON.parse(response.body))
          }
        })
        this._client.send('/api/register', {}, JSON.stringify({name}))
      })
    })
  }
  sendMessage (message) {
    this._client.send('/api/chat', {}, JSON.stringify({message}))
  }
}
export const socketConnection = new SocketConnector()
export default socketConnection
