import { shallow } from 'enzyme'
import React from 'react'
import {WelcomePage} from '../welcomePage'
import {EnterForm} from '../enterForm'

describe('<WelcomePage />', () => {
  it('renders a form', () => {
    const renderedComponent = shallow(<WelcomePage />)
    expect(renderedComponent.first(EnterForm)).toBeDefined()
  })
  it('renders a Form passing down the onEnterChat and entering props', () => {
    const mockFunc = () => {}
    const renderedComponent = shallow(<WelcomePage entering onEnterChat={mockFunc} />)
    const form = renderedComponent.find(EnterForm)
    expect(form.prop('entering')).toEqual(true)
    expect(form.prop('onEnterChat')).toEqual(mockFunc)
  })
})
