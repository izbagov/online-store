import { createStore, combineReducers, applyMiddleware } from 'redux';
import {routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Import reducers

import Products from './products'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    items: Products,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);