import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from '../actions/types'

const initialState = {
  items: [],
  isLoading: false,
  hasError: null
}

export default function news(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS_START:
      return {
        ...state,
        isLoading: true,
        hasError: null
      }
    
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.items
      }

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: action.payload,
        items: []
      }
    default:
      return state
  }
}