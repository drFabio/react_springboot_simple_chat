import React, {Component} from 'react'
import {MessageInput} from './messageInput'
import {SendMessageButton} from './sendMessageButton'

export class MessageForm extends Component {
  state = {
    message: ''
  }
  onSendMessage = () => {
    const message = this.state.message
    this.props.sendMessage(message)
    this.setState({message: ''})
  }
  handleChange = (ev) => {
    const message = ev.target.value
    this.setState({message})
  }
  render () {
    return (
      <div>
        <MessageInput
          entering={this.props.entering}
          value={this.state.message}
          onChange={this.handleChange}
        />
        <SendMessageButton entering={this.props.entering} onClick={this.onSendMessage} />
      </div>
    )
  }
}
export default MessageForm
