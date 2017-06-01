import { shallow } from 'enzyme'
import React from 'react'
import {NameInput} from '../nameInput'

describe('<NameInput />', () => {
  it('renders an input', () => {
    const renderedComponent = shallow(<NameInput />)
    expect(renderedComponent.type()).toEqual('input')
  })
  it('Disables if entering prop is passed ', () => {
    const renderedComponent = shallow(<NameInput entering />)
    expect(renderedComponent.prop('disabled')).toEqual(true)
  })
})
