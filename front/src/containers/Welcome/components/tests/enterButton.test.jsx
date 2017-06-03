import { mount } from 'enzyme'
import React from 'react'
import {EnterButton} from '../enterButton'

describe('<EnterButton />', () => {
  const mockClick = () => {}
  it('renders a button', () => {
    const renderedComponent = mount(<EnterButton onClick={mockClick} />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })
  it('Displays enter if no props is passed ', () => {
    const renderedComponent = mount(<EnterButton onClick={mockClick} />)
    expect(renderedComponent.text()).toEqual('Enter')
  })
  it('Displays "Entering ..." and disables if entering prop is passed ', () => {
    const renderedComponent = mount(<EnterButton entering onClick={mockClick} />)
    expect(renderedComponent.text()).toEqual('Entering ...')
    expect(renderedComponent.find('button').prop('disabled')).toEqual(true)
  })
})
