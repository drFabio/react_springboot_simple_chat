import reducer, {initial as initialState} from '../reducer'
import types from '../actionTypes'

describe('welcome reducer', () => {
  it('Flags entering and save userName on ENTER_CHAT', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.ENTER_CHAT,
      userName: mockName
    }
    const expectedResult = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', true)
    })
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
  })
  it('Remove error on ENTER_CHAT', () => {
    const mockName = 'mockName'
    const mockAction = {
      type: types.ENTER_CHAT,
      userName: mockName,
      error: {message: 'error'}
    }
    const expectedResult = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', true)
    })
    const result = reducer(initialState, mockAction)
    expect(result).toEqual(expectedResult)
  })
  it('Unflags entering and set error on USER_ALREADY_EXISTS', () => {
    const mockName = 'mockName'
    const reducerState = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', true)
    })
    const mockError = {'message': 'The user already exists'}
    const mockAction = {
      type: types.USER_ALREADY_EXISTS,
      error: mockError
    }
    const expectedResult = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', false)
        .set('error', mockError)
    })
    const result = reducer(reducerState, mockAction)
    expect(result).toEqual(expectedResult)
  })
  it('Unflags entering and flags success on WELCOME_TO_THE_CHAT', () => {
    const mockName = 'mockName'
    const reducerState = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', true)
    })
    const mockAction = {
      type: types.WELCOME_TO_THE_CHAT
    }
    const expectedResult = initialState.withMutations((state) => {
      return state.set('userName', mockName)
        .set('entering', false)
        .set('success', true)
    })
    const result = reducer(reducerState, mockAction)
    expect(result).toEqual(expectedResult)
  })
})
