import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger()
  const reduxDT = window.__REDUX_DEVTOOLS_EXTENSION__

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        logger
      ),
      reduxDT ? reduxDT() : f => f
  ))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}