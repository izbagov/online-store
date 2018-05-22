import {
  SET_SEARCH_QUERY
} from './types'

export const setSearchQuery = text => {
  return {
    type: SET_SEARCH_QUERY,
    text
  };
};
