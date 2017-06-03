import { shallow } from 'enzyme'
import React from 'react'
import {SendMessageButton} from '../sendMessageButton'

describe('<SendMessageButton />', () => {
  const mockClick = () => {}
  it('renders a button', () => {
    const renderedComponent = shallow(<SendMessageButton onClick={mockClick} />)
    expect(renderedComponent.type()).toEqual('button')
  })
})
