import { shallow } from 'enzyme'
import React from 'react'
import {EnterButton} from '../enterButton'

describe('<EnterButton />', () => {
  it('renders a button', () => {
    const renderedComponent = shallow(<EnterButton />)
    expect(renderedComponent.type()).toEqual('button')
  })
  it('Displays enter if no props is passed ', () => {
    const renderedComponent = shallow(<EnterButton />)
    expect(renderedComponent.text()).toEqual('Enter')
  })
  it('Displays "Entering ..." and disables if entering prop is passed ', () => {
    const renderedComponent = shallow(<EnterButton entering />)
    expect(renderedComponent.text()).toEqual('Entering ...')
    expect(renderedComponent.prop('disabled')).toEqual(true)
  })
})
