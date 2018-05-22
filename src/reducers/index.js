import { createStore, combineReducers, applyMiddleware } from 'redux';
import {routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reduxLogger from 'redux-logger'

// Import reducers

import products from './products'
import filter from './filter'

export const history = createHistory()

const reactReduxRouterMiddleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    products,
    filter,
    router: routerReducer
  }),
  applyMiddleware(
    reactReduxRouterMiddleware,
    reduxLogger
  )
);