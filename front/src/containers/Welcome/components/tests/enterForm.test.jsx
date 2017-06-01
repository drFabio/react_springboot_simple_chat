import { shallow } from 'enzyme'
import React from 'react'
import {EnterForm, EnterButton, NameInput} from '../enterForm'

describe('<Enterform />', () => {
  it('renders one EnterButton and one NameInput', () => {
    const renderedComponent = shallow(<EnterForm />)
    expect(renderedComponent.find(EnterButton).length).toEqual(1)
    expect(renderedComponent.find(NameInput).length).toEqual(1)
  })
  it('Pass entering property down', () => {
    const renderedComponent = shallow(<EnterForm entering />)
    expect(renderedComponent.first(EnterButton).prop('entering')).toEqual(true)
    expect(renderedComponent.first(NameInput).prop('entering')).toEqual(true)
  })
})
