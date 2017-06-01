import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import welcome from 'containers/Welcome/reducer'
export default () => {
  return combineReducers({
    welcome,
    routing: routerReducer
  })
}
