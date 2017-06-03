import { shallow } from 'enzyme'
import React from 'react'
import {MessageInput} from '../messageInput'

describe('<MessageInput />', () => {
  it('renders an input', () => {
    const renderedComponent = shallow(<MessageInput />)
    expect(renderedComponent.type()).toEqual('input')
  })
  it('rendered input displays the prop value', () => {
    const mockValue = 'mockValue'
    const renderedComponent = shallow(<MessageInput value={mockValue} />)
    expect(renderedComponent.prop('value')).toEqual(mockValue)
  })
})
