export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export const setSearchQuery = text => {
  return {
    type: SET_SEARCH_QUERY,
    text
  }
}