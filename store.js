import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reducers from './reducers'

const generalState = {
  loading: false,
}

export const initStore = (initialState = generalState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, reduxLogger)));
}