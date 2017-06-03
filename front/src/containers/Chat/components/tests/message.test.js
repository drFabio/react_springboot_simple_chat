import { shallow } from 'enzyme'
import React from 'react'
import {Message} from '../message'

describe('<Message />', () => {
  it('renders an div with the internal content', () => {
    const mockContent = 'mockContent'
    const renderedComponent = shallow(<Message>{mockContent}</Message>)
    expect(renderedComponent.text()).toEqual(mockContent)
  })
})
