import React, {Component} from 'react'
import {MessageForm} from './messageForm'
import {MessageArea} from './messageArea'

export class ChatPage extends Component {
  render () {
    return (
      <div>
        <h1>You are on the Chat, Talk alway!</h1>
        <MessageArea messages={this.props.messages} />
        <MessageForm sendMessage={this.props.sendMessage} />
      </div>
    )
  }
}
export default ChatPage
