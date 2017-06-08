import React, {Component} from 'react'
import {MessageForm} from './messageForm'
import {MessageArea} from './messageArea'
import {UserList} from './userList'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {Title, Card} from 'elements'

const Container = styled(Card)`
  height: 100%;
  position: relative;
  overflow: hidden;
  text-align: left;
`
const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
  width: 100%;
`
const InnerContainer = styled.div`
  padding: 0.5rem;
  position: relative;
  height: 100%;
`
const InnerFormContainer = styled.div`
  padding: 0 0.5rem;
  position relative;
  height: 100%;
`
const MainContainer = styled.section`
  position: absolute;
  top: 4.5rem;
  bottom: 3.5rem;
  width: 100%;
`
const InnerMainContainer = styled.section`
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  height: 100%;
  position: relative;
`
const InnerRow = styled.section`
  display: table-row;
  height: 100%;
`
const InnerOuterMainContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
`
const MessageAreaContainer = styled.section`
  display: table-cell;
  width: 100%;
  height: 0;
  padding-right: 1rem;
  white-space: nowrap;
`
const UserListContainer = styled.section`
  display: table-cell;
  max-width: 25%;
  white-space: nowrap;
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
        <InnerContainer>
          <Title>You are on the Chat, Talk alway!</Title>
          <MainContainer innerRef={(c) => { this.chatArea = c }}>
            <InnerOuterMainContainer>
              <InnerMainContainer>
                <InnerRow>
                  <MessageAreaContainer>
                    <MessageArea messages={this.props.messages} />
                  </MessageAreaContainer>
                  <UserListContainer>
                    <UserList users={this.props.users} />
                  </UserListContainer>
                </InnerRow>
              </InnerMainContainer>
            </InnerOuterMainContainer>
          </MainContainer>
          <FormContainer>
            <InnerFormContainer>
              <MessageForm sendMessage={this.props.sendMessage} />
            </InnerFormContainer>
          </FormContainer>
        </InnerContainer>
      </Container>
    )
  }
}
export default ChatPage
