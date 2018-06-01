import { connect } from 'react-redux'

import News from '../components/News'
import { fetchNewsData } from "../actions/hooks";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchNewsData(url))
  };
};

const mapStateToProps = state => ({
  news: state.news.items,
  isLoading: state.news.isLoading,
  hasError: state.news.hasError
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
