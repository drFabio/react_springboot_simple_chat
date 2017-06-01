import { shallow } from 'enzyme'
import React from 'react'
import {EnterButton} from '../enterButton'

describe('<EnterButton />', () => {
  it('renders', () => {
    const renderedComponent = shallow(<EnterButton />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
