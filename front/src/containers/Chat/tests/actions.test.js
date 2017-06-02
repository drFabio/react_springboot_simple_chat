import types from '../actionTypes'
import actions from '../actions'
describe('Chat container Actions', () => {
  it('someoneEntered returns who entered', () => {
    const mockUsername = 'mockUsername'
    const expectedResult = {
      type: types.SOMEONE_ENTERED,
      userName: mockUsername
    }
    expect(actions.someoneEntered(mockUsername))
      .toEqual(expectedResult)
  })
  it('someoneLeft returns who left', () => {
    const mockUsername = 'mockUsername'
    const expectedResult = {
      type: types.SOMEONE_LEFT,
      userName: mockUsername
    }
    expect(actions.someoneLeft(mockUsername))
      .toEqual(expectedResult)
  })
  it('receivedMessage returns what message and who is from', () => {
    const mockUsername = 'mockUsername'
    const mockMessage = 'mockMessage'
    const expectedResult = {
      type: types.RECEIVED_MESSAGE,
      senderName: mockUsername,
      message: mockMessage
    }
    expect(actions.receivedMessage(mockMessage, mockUsername))
      .toEqual(expectedResult)
  })
  it('sendMessage returns what message', () => {
    const mockMessage = 'mockMessage'
    const expectedResult = {
      type: types.SOMEONE_LEFT,
      message: mockMessage
    }
    expect(actions.sendMessage(mockMessage))
      .toEqual(expectedResult)
  })
})
