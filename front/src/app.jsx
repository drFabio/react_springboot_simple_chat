import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import getReducer from './getReducer'
import {Welcome, Chat} from 'containers'
import {Template} from './template'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import {welcomeSaga} from './containers/Welcome/saga'
import {chatSaga} from './containers/Chat/saga'
import socketConnection from 'utils/socketConnection'
import {injectGlobal} from 'styled-components'
injectGlobal`
  html {
    height: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    overflow-y: hidden;
  }
  #app {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`
const routeMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(
  routeMiddleware,
  sagaMiddleware
)(createStore)
const store = createStoreWithMiddleware(getReducer())
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(welcomeSaga)
sagaMiddleware.run(chatSaga)

const requireConnection = (nextState, replace, callback) => {
  if (socketConnection.isConnected()) {
    callback()
  }
  replace({pathname: '/'})
  callback()
}
export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <Route path='/' component={Template} >
            <IndexRoute component={Welcome} />
            <Route onEnter={requireConnection} path='/chat' component={Chat} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
export default App
