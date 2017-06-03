import { shallow } from 'enzyme'
import React from 'react'
import {MessageArea} from '../messageArea'
import {Message} from '../message'

describe('<MessageArea />', () => {
  it('renders an the number of passed messages', () => {
    const mockMessages = [{body: 'foo'}, {body: 'bar'}, {body: 'baz'}]
    const renderedComponent = shallow(<MessageArea messages={mockMessages} />)
    expect(renderedComponent.find(Message).length).toEqual(mockMessages.length)
  })
  it('Pass the message body as the inner value and the rest as props', () => {
    const mockMessages = [{body: 'foo', senderName: 'baz'}]
    const renderedComponent = shallow(<MessageArea messages={mockMessages} />)
    const renderedMessage = renderedComponent.find(Message)
    const {body, ...other} = mockMessages[0]
    expect(renderedMessage.prop('children')).toEqual(body)
    for (const propName in other) {
      expect(renderedMessage.prop(propName)).toEqual(other[propName])
    }
  })
})
