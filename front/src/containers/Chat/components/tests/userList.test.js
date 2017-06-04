import { mount } from 'enzyme'
import React from 'react'
import {UserList} from '../userList'

describe('<UserList />', () => {
  it('renders the number of users', () => {
    const mockUsers = ['foo', 'bar', 'baz']
    const renderedComponent = mount(<UserList users={mockUsers} />)
    expect(renderedComponent.find('li').length).toEqual(mockUsers.length)
  })
})
