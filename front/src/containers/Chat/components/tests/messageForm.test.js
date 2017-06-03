import { mount } from 'enzyme'
import React from 'react'
import {MessageInput, MessageForm, SendMessageButton} from '../'
import sinon from 'sinon'

describe('<MessageForm />', () => {
  it('renders one SendMessageButton and one MessageInput', () => {
    const renderedComponent = mount(<MessageForm />)
    expect(renderedComponent.find(SendMessageButton).length).toEqual(1)
    expect(renderedComponent.find(MessageInput).length).toEqual(1)
  })
  it('Fills the input value based on the state', () => {
    const renderedComponent = mount(<MessageForm />)
    const mockValue = 'mockValue'
    renderedComponent.setState({'message': mockValue})
    expect(renderedComponent.first(MessageInput).find('input').prop('value')).toEqual(mockValue)
  })
  it('Save the value of name on state when it changes', () => {
    const renderedComponent = mount(<MessageForm />)
    const mockValue = 'mockValue'
    const mockEvent = {target: {value: mockValue}}
    renderedComponent.first(MessageInput).find('input').simulate('change', mockEvent)
    expect(renderedComponent.state('message')).toEqual(mockValue)
  })
  it('When the button is send sendMessage prop is invoked and message state is cleared', () => {
    const sendMessageSpy = sinon.spy()
    const renderedComponent = mount(<MessageForm sendMessage={sendMessageSpy} />)
    const mockValue = 'mockValue'
    renderedComponent.setState({'message': mockValue})
    renderedComponent.first(SendMessageButton).find('button').simulate('click')
    expect(renderedComponent.state('message')).toEqual('')
  })
})
