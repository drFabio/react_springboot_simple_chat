import { shallow, mount } from 'enzyme'
import React from 'react'
import {Message} from '../message'

describe('<Message />', () => {
  it('renders an div with the internal content', () => {
    const mockContent = 'mockContent'
    const renderedComponent = shallow(<Message>{mockContent}</Message>)
    expect(renderedComponent.text()).toEqual(mockContent)
  })
  it('renders the username on a span if present', () => {
    const mockContent = 'mockContent'
    const mockName = 'mockName'
    const renderedComponent = mount(<Message senderName={mockName}>{mockContent}</Message>)
    expect(renderedComponent.find('span').first().text()).toEqual(mockName)
  })
})
