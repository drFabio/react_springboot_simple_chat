import reducer, {initial as initialState} from '../reducer'
import types from '../actionTypes'

describe('chat reducer', () => {
  it('Adds a message to the list when someone enters', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_ENTERED,
      userName: mockName
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push(`${mockName} joined the room`))
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
  })
  it('Adds a message to the list when someone leaves', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.SOMEONE_LEFT,
      userName: mockName
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push(`${mockName} left the room`))
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
  })
  it('Adds a message to the list when a message is received', () => {
    const mockName = 'mockName'
    const mockMessage = 'mockMessage'
    const mockAction = {
      type: types.RECEIVED_MESSAGE,
      senderName: mockName,
      message: mockMessage
    }
    const expectedResult = initialState.update('messagesList', messages => messages.push(`${mockName} - : ${mockMessage}`))
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
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
