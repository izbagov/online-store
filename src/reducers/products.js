import posts from '../api/data'
import {
  ALL_PRODUCTS
} from '../actions/types'

export default function products(state = posts, action) {
  switch(action.type) {
    case ALL_PRODUCTS:
      return state;
    default:
      return state;
  }
}