
import { shallow, mount } from 'enzyme'
import React from 'react'
import {
  ChatPage,
  MessageForm,
  MessageArea
} from '../'
import sinon from 'sinon'

describe('<ChatPage />', () => {
  it('renders the messageForm and messageArea', () => {
    const renderedComponent = mount(<ChatPage />)
    expect(renderedComponent.find(MessageArea).length).toEqual(1)
    expect(renderedComponent.find(MessageForm).length).toEqual(1)
  })
  it('Passs down the messaged to MessageArea', () => {
    const mockMessages = ['foo', 'bar', 'baz']
    const renderedComponent = shallow(<ChatPage messages={mockMessages} />)
    expect(renderedComponent.find(MessageArea).prop('messages')).toEqual(mockMessages)
  })
  it('Passs down sendMessage to MessageForm', () => {
    const sendMessageSpy = sinon.spy()
    const renderedComponent = mount(<ChatPage sendMessage={sendMessageSpy} />)
    expect(renderedComponent.find(MessageForm).prop('sendMessage')).toEqual(sendMessageSpy)
  })
})
