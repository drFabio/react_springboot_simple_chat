import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import getReducer from './getReducer'
import {Welcome} from 'containers'
import {Template} from './template'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import {welcomeSaga} from './containers/Welcome/saga'

const routeMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(
  routeMiddleware,
  sagaMiddleware
)(createStore)
const store = createStoreWithMiddleware(getReducer())
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(welcomeSaga)

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <Route path='/' component={Template} >
            <IndexRoute component={Welcome} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
export default App
