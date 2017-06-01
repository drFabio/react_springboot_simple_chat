import { shallow } from 'enzyme'
import React from 'react'
import {NameInput} from '../nameInput'

describe('<NameInput />', () => {
  it('renders', () => {
    const renderedComponent = shallow(<NameInput />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
