import types from '../actionTypes'
import actions from '../actions'
describe('Welcome container Actions', () => {
  it('enterChat returns ENTER_CHAT with userName data', () => {
    const mockName = 'mockName'
    const expectedResult = {
      type: types.ENTER_CHAT,
      userName: mockName
    }
    expect(actions.enterChat(mockName))
      .toEqual(expectedResult)
  })
  it('user already exists returns USER_ALREADY_EXISTS', () => {
    const mockError = 'The user already exists'
    const expectedResult = {
      type: types.USER_ALREADY_EXISTS,
      error: mockError
    }
    expect(actions.userAlreadyExists(mockError))
      .toEqual(expectedResult)
  })
})
