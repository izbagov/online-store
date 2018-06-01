import { createStore, combineReducers, applyMiddleware } from 'redux'
import {routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reduxLogger from 'redux-logger'
import thunk from 'redux-thunk'

// Import reducers

import products from './products'
import filter from './filter'
import news from './news'

export const history = createHistory()

const reactReduxRouterMiddleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    products,
    filter,
    news,
    router: routerReducer
  }),
  applyMiddleware(
    reactReduxRouterMiddleware,
    reduxLogger,
    thunk
  )
);