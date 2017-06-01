import { shallow } from 'enzyme'
import React from 'react'
import {EnterForm} from '../enterForm'

describe('<Enterform />', () => {
  it('renders an input', () => {
    const renderedComponent = shallow(<EnterForm />)
    expect(renderedComponent.type()).toEqual('input')
  })
  it('Disables if entering prop is passed ', () => {
    const renderedComponent = shallow(<EnterForm entering />)
    expect(renderedComponent.prop('disabled')).toEqual(true)
  })
})
