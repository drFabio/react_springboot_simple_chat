import { shallow, mount } from 'enzyme'
import React from 'react'
import {EnterForm, EnterButton, NameInput} from '../'
import sinon from 'sinon'

describe('<Enterform />', () => {
  it('renders one EnterButton and one NameInput', () => {
    const renderedComponent = shallow(<EnterForm />)
    expect(renderedComponent.find(EnterButton).length).toEqual(1)
    expect(renderedComponent.find(NameInput).length).toEqual(1)
  })
  it('Pass entering property down', () => {
    const renderedComponent = mount(<EnterForm entering />)
    expect(renderedComponent.first(EnterButton).prop('entering')).toEqual(true)
    expect(renderedComponent.first(NameInput).prop('entering')).toEqual(true)
  })
  it('Save the value of name on state when it changes', () => {
    const renderedComponent = mount(<EnterForm />)
    const mockValue = 'mockValue'
    const mockEvent = {target: {value: mockValue}}
    renderedComponent.first(NameInput).find('input').simulate('change', mockEvent)
    expect(renderedComponent.state('chatName')).toEqual(mockValue)
  })
  it('Fills the input value based on the state', () => {
    const renderedComponent = mount(<EnterForm />)
    const mockValue = 'mockValue'
    renderedComponent.setState({'chatName': mockValue})
    expect(renderedComponent.first(NameInput).find('input').prop('value')).toEqual(mockValue)
  })
  it('Invokes the onEnterChat with the chatName value when button is clicked', () => {
    const onEnterChatSpy = sinon.spy()
    const renderedComponent = mount(<EnterForm onEnterChat={onEnterChatSpy} />)
    const mockValue = 'mockValue'
    renderedComponent.setState({'chatName': mockValue})
    renderedComponent.find(EnterButton).simulate('click')
    expect(onEnterChatSpy.calledWith(mockValue)).toBe(true)
  })
})
