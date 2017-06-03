
import { shallow } from 'enzyme'
import React from 'react'
import {
  ChatPage,
  MessageForm,
  MessageArea
} from '../'
import sinon from 'sinon'

describe('<ChatPage />', () => {
  it('renders the messageForm and messageArea', () => {
    const renderedComponent = shallow(<ChatPage />)
    expect(renderedComponent.first(MessageArea).length).toEqual(1)
    expect(renderedComponent.first(MessageForm).length).toEqual(1)
  })
  it('Passs down the messaged to MessageArea', () => {
    const mockMessages = ['foo', 'bar', 'baz']
    const renderedComponent = shallow(<ChatPage messages={mockMessages} />)
    expect(renderedComponent.find(MessageArea).prop('messages')).toEqual(mockMessages)
  })
  it('Passs down sendMessage to MessageForm', () => {
    const sendMessageSpy = sinon.spy()
    const renderedComponent = shallow(<ChatPage sendMessage={sendMessageSpy} />)
    expect(renderedComponent.find(MessageForm).prop('sendMessage')).toEqual(sendMessageSpy)
  })
})
