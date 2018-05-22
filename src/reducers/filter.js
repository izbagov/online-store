import { SET_SEARCH_QUERY } from '../actionTypes'

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