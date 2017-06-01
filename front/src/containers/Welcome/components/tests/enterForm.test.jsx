import { shallow } from 'enzyme'
import React from 'react'
import {EnterForm} from '../enterForm'

describe('<Enterform />', () => {
  it('renders', () => {
    const renderedComponent = shallow(<EnterForm />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
