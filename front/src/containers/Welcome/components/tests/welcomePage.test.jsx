import { shallow, mount } from 'enzyme'
import React from 'react'
import {WelcomePage} from '../welcomePage'
import {EnterForm} from '../enterForm'
import {ErrorMessage} from '../errorMessage'

describe('<WelcomePage />', () => {
  const mockFunc = () => {}
  it('renders a form', () => {
    const renderedComponent = shallow(<WelcomePage onEnterChat={mockFunc} />)
    expect(renderedComponent.first(EnterForm)).toBeDefined()
  })
  it('renders a Form passing down the onEnterChat and entering props', () => {
    const renderedComponent = shallow(<WelcomePage entering onEnterChat={mockFunc} />)
    const form = renderedComponent.find(EnterForm)
    expect(form.prop('entering')).toEqual(true)
    expect(form.prop('onEnterChat')).toEqual(mockFunc)
  })
  it('Diplays an error if error is passed while still displaying the enterForm', () => {
    const mockError = 'mockError'
    const renderedComponent = mount(<WelcomePage error={mockError} onEnterChat={mockFunc} />)
    expect(renderedComponent.first(EnterForm)).toBeDefined()
    const errorMessage = renderedComponent.find(ErrorMessage)
    expect(errorMessage).toBeDefined()
    expect(errorMessage.first().text()).toEqual(mockError)
  })
})
