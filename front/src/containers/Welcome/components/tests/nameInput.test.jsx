import { shallow, mount } from 'enzyme'
import React from 'react'
import {NameInput} from '../nameInput'

describe('<NameInput />', () => {
  it('renders an input', () => {
    const renderedComponent = mount(<NameInput />)
    expect(renderedComponent.find('input').length).toEqual(1)
  })
  it('Disables if entering prop is passed ', () => {
    const renderedComponent = shallow(<NameInput entering />)
    expect(renderedComponent.prop('disabled')).toEqual(true)
  })
})
