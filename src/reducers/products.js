import posts from '../api/data'
import {
  ALL_PRODUCTS
} from '../actionTypes'

export default function products(state = posts, action) {
  switch(action.type) {
    case ALL_PRODUCTS:
      return state;
    default:
      return state;
  }
}