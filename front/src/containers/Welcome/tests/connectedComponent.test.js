import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import {Welcome} from '../index'
import {Map} from 'immutable'
describe('<Welcome /> - Connected page', () => {
  const mockStore = configureStore()
  it('Renders and pass down the appropriate properties', () => {
    const initialState = {
      welcome: new Map({
        entering: true,
        error: 'Foo var'
      })
    }
    const store = mockStore(initialState)
    const renderedComponent = shallow(<Welcome store={store} />)
    expect(renderedComponent.prop('entering')).toEqual(initialState.welcome.get('entering'))
    expect(renderedComponent.prop('error')).toEqual(initialState.welcome.get('error'))
  })
})
