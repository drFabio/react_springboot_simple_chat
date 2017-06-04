import reducer, {initial as initialState} from '../reducer'
import types from '../actionTypes'
import {LOCATION_CHANGE} from 'react-router-redux'

describe('chat reducer', () => {
  it('Adds a a user to the user list sorted when someone enters', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_ENTERED,
      userName: mockName
    }
    const testState = initialState.update(
      'userList',
      userList => userList.withMutations((set) => {
        return set.add('foo')
          .add('zap')
          .add('abc')
          .add('bar')
          .sort()
      })
    )
    const expectedResult = testState.update(
      'userList',
      userList => userList.add(mockName).sort()
    )
    const result = reducer(testState, mockAction)
    expect(result.get('userList')).toEqual(expectedResult.get('userList'))
  })
  it('Removes a user from the user list when someone leaves', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_LEFT,
      userName: mockName
    }
    const testState = initialState.update(
      'userList',
      userList => userList.withMutations((set) => {
        return set.add('foo')
          .add('zap')
          .add('abc')
          .add('bar')
          .add('mockName')
          .sort()
      })
    )
    const expectedResult = testState.update(
      'userList',
      userList => userList.withMutations((set) => {
        return set.delete(mockName)
      })
    )
    const result = reducer(testState, mockAction)
    expect(result.get('userList')).toEqual(expectedResult.get('userList'))
  })
  it('Adds a message to the list when someone enters', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_ENTERED,
      userName: mockName
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push({body: `${mockName} joined the room`, isJoin: true}))
    const result = reducer(initialState, mockAction)
    expect(result.get('messagesList')).toEqual(expectedResult.get('messagesList'))
  })
  it('Adds a message to the list when someone leaves', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_LEFT,
      userName: mockName
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push({body: `${mockName} left the room`, isLeft: true}))
    const result = reducer(initialState, mockAction)
    expect(result.get('messagesList')).toEqual(expectedResult.get('messagesList'))
  })
  it('Adds a message to the list when a message is received', () => {
    const mockName = 'mockName'
    const mockMessage = 'mockMessage'
    const mockAction = {
      type: types.RECEIVED_MESSAGE,
      senderName: mockName,
      message: mockMessage
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push({body: `${mockMessage}`, senderName: mockName}))
    const result = reducer(initialState, mockAction)
    expect(result.get('messagesList')).toEqual(expectedResult.get('messagesList'))
  })
  it('Adds a message to the outgoingMessage when a message is sent', () => {
    const mockMessage = 'mockMessage'
    const mockAction = {
      type: types.SEND_MESSAGE,
      message: mockMessage
    }
    const expectedResult = initialState.set('outgoingMessage', mockMessage)
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
  })
})
