import React, {Component} from 'react'
import {MessageInput} from './messageInput'
import {SendMessageButton} from './sendMessageButton'
import styled from 'styled-components'
const Container = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  position: relative;
`
const StyledInput = styled(MessageInput)`
  display: table-cell;
  width: 100%;
`
const StyledButton = styled(SendMessageButton)`
  display: table-cell;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 100%;
`
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
      <Container className={this.props.className}>
        <StyledInput
          entering={this.props.entering}
          value={this.state.message}
          onChange={this.handleChange}
        />
        <StyledButton entering={this.props.entering} onClick={this.onSendMessage} />
      </Container>
    )
  }
}
export default MessageForm
