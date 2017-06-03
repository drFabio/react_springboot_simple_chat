import { shallow } from 'enzyme'
import React from 'react'
import {MessageArea} from '../messageArea'
import {Message} from '../message'

describe('<MessageArea />', () => {
  it('renders an the number of passed messages', () => {
    const mockMessages = ['foo', 'bar', 'baz']
    const renderedComponent = shallow(<MessageArea messages={mockMessages} />)
    expect(renderedComponent.find(Message).length).toEqual(mockMessages.length)
  })
})
