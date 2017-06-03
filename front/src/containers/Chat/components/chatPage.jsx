import React, {Component} from 'react'
import {MessageForm} from './messageForm'
import {MessageArea} from './messageArea'
import styled from 'styled-components'
import {Title} from 'elements'
const Container = styled.div`
  height: 100%;
  position: relative;
`
const StyledForm = styled(MessageForm)`
  position: absolute;
  bottom: 0;
`
export class ChatPage extends Component {
  render () {
    return (
      <Container>
        <Title>You are on the Chat, Talk alway!</Title>
        <MessageArea messages={this.props.messages} />
        <StyledForm sendMessage={this.props.sendMessage} />
      </Container>
    )
  }
}
export default ChatPage
