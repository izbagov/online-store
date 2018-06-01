import {
  SET_SEARCH_QUERY,
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from './types'

export const setSearchQuery = text => {
  return {
    type: SET_SEARCH_QUERY,
    text
  };
};

export const fetchNewsStart = () => ({
  type: FETCH_NEWS_START
})

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
})

export const fetchNewsSuccess = items => ({
  type: FETCH_NEWS_SUCCESS,
  items
})

export const fetchNewsData = (url) => {
  return (dispatch) => {
    dispatch(fetchNewsStart());

    fetch(url)
      .then(response => response.json())
      .then(items => dispatch(fetchNewsSuccess(items)))
      .catch(e => dispatch(fetchNewsFailure(e)));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}