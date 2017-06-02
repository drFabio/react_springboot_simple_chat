import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import welcome from 'containers/Welcome/reducer'
import chat from 'containers/Chat/reducer'
export default () => {
  return combineReducers({
    welcome,
    chat,
    routing: routerReducer
  })
}
