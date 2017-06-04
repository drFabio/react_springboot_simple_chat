import React, {Component} from 'react'
import {MessageForm} from './messageForm'
import {MessageArea} from './messageArea'
import {UserList} from './userList'
import ReactDOM from 'react-dom'
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
const MainContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 3rem;
  bottom: 3.5rem;
`
const InnerMainContainer = styled.section`
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  height: 100%;
  position: realtive;
  overflow: hidden;
`
const MessageAreaContainer = styled.section`
  display: table-cell;
  width: 100%;
  height: 100%;
  padding-right: 1rem;
`
const UserListContainer = styled.section`
  display: table-cell;
  max-width: 25%;
`
export class ChatPage extends Component {
  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.chatArea)
    node.scrollTop = node.scrollHeight
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }
  render () {
    return (
      <Container>
        <Title>You are on the Chat, Talk alway!</Title>
        <MainContainer innerRef={(c) => { this.chatArea = c }}>
          <InnerMainContainer>
            <MessageAreaContainer>
              <MessageArea messages={this.props.messages} />
            </MessageAreaContainer>
            <UserListContainer>
              <UserList users={this.props.users} />
            </UserListContainer>
          </InnerMainContainer>
        </MainContainer>
        <FormContainer>
          <MessageForm sendMessage={this.props.sendMessage} />
        </FormContainer>
      </Container>
    )
  }
}
export default ChatPage
