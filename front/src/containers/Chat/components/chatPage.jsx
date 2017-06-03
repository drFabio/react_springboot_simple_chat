import React, {Component} from 'react'
import {MessageForm} from './messageForm'
import {MessageArea} from './messageArea'
import styled from 'styled-components'
import {Title} from 'elements'
const Container = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
`
const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
`
const AreaContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 3.5rem;
  overflow-y: auto;
`
export class ChatPage extends Component {
  render () {
    return (
      <Container>
        <AreaContainer>
          <Title>You are on the Chat, Talk alway!</Title>
          <MessageArea messages={this.props.messages} />
        </AreaContainer>
        <FormContainer>
          <MessageForm sendMessage={this.props.sendMessage} />
        </FormContainer>
      </Container>
    )
  }
}
export default ChatPage
