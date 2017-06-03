import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import {Chat} from '../index'
import {Map, List} from 'immutable'
describe('<Chat /> - Connected page', () => {
  const mockStore = configureStore()
  it('Renders and pass down the appropriate properties', () => {
    const mockMessages = ['foo', 'bar', 'baz']
    const initialState = {
      chat: new Map({
        messagesList: new List(mockMessages)
      })
    }
    const store = mockStore(initialState)
    const renderedComponent = shallow(<Chat store={store} />)
    expect(renderedComponent.prop('messages')).toEqual(mockMessages)
  })
})
