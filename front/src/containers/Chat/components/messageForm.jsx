import React, {Component} from 'react'
import {MessageInput} from './messageInput'
import {SendMessageButton} from './sendMessageButton'
import styled from 'styled-components'
import {checkEnter} from 'utils/checkEnter'

const Container = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  position: relative;
`
const InputContainer = styled.div`
  display: table-cell;
  width: 100%;
  white-space:nowrap;
`
const ButtonContainer = styled.div`
  display: table-cell;
  white-space:nowrap;
`
const StyledRow = styled.div`
  display: table-row;
`
const StyledButton = styled(SendMessageButton)`
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
  onCheckKey = (e) => {
    if (checkEnter(e)) {
      this.onSendMessage()
    }
  }
  render () {
    return (
      <Container className={this.props.className}>
        <StyledRow>
          <InputContainer>
            <MessageInput
              entering={this.props.entering}
              value={this.state.message}
              onChange={this.handleChange}
              onKeyUp={this.onCheckKey}
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton entering={this.props.entering} onClick={this.onSendMessage} />
          </ButtonContainer>
        </StyledRow>
      </Container>
    )
  }
}
export default MessageForm
