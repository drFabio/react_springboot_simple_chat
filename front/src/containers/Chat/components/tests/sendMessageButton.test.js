import { mount } from 'enzyme'
import React from 'react'
import {SendMessageButton} from '../sendMessageButton'

describe('<SendMessageButton />', () => {
  const mockClick = () => {}
  it('renders a button', () => {
    const renderedComponent = mount(<SendMessageButton onClick={mockClick} />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })
})
