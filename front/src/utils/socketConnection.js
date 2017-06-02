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
      console.log('tryingb to connect to client')
      this._client.connect({}, (frame) => {
        this._connected = true
        resolve()
      })
    })
  }
  connectWithName (name) {
    console.log('connecting with name')
    return this._ensureConnection().then(() => {
      this._client.subscribe('/user/topic/registerResponse', (response) => {
        return Promise.resolve(JSON.parse(response.body))
      })
      this._client.send('/api/register', {}, JSON.stringify({name}))
    })
  }
}
export const socketConnection = new SocketConnector()
export default socketConnection
