export class SocketConnector {
  // Fake for now
  connectWithName (name) {
    console.log('connecting with name')
    return Promise.resolve({entered: true})
  }
}
export const socketConnection = new SocketConnector()
export default socketConnection
