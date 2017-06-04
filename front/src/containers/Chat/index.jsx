import { connect } from 'react-redux'
import {ChatPage} from './components'
import actions from './actions'
function mapStateToProps (state) {
  const myState = state.chat
  return {
    messages: myState.get('messagesList').toJS(),
    users: myState.get('userList').toJS()
  }
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    sendMessage (message) {
      dispatch(actions.sendMessage(message))
    }
  }
}
export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatPage)
export default Chat
