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
    const mockError = {message: 'Foo'}
    const expectedResult = {
      type: types.USER_ALREADY_EXISTS,
      error: mockError
    }
    expect(actions.userAlreadyExists(mockError))
      .toEqual(expectedResult)
  })
  it('welcomeToTheChat returns WELCOME_TO_THE_CHAT with message', () => {
    const mockMessage = 'mockMessage'
    const expectedResult = {
      type: types.WELCOME_TO_THE_CHAT,
      welcomeMessage: mockMessage
    }
    expect(actions.welcomeToTheChat(mockMessage))
      .toEqual(expectedResult)
  })
})
