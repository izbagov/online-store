import { SET_SEARCH_QUERY } from '../actions/types'

const initialState = {
  searchQuery: ''
}

export default function filter(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.text
      };
    default:
      return state;
  }
}