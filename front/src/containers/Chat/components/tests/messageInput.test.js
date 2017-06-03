import { shallow, mount } from 'enzyme'
import React from 'react'
import {MessageInput} from '../messageInput'

describe('<MessageInput />', () => {
  it('renders an input', () => {
    const renderedComponent = mount(<MessageInput />)
    expect(renderedComponent.find('input').length).toEqual(1)
  })
  it('rendered input displays the prop value', () => {
    const mockValue = 'mockValue'
    const renderedComponent = shallow(<MessageInput value={mockValue} />)
    expect(renderedComponent.prop('value')).toEqual(mockValue)
  })
})
