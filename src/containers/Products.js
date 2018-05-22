import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Products from '../components/Products'

const sortBySearch = (products, searchQuery) => {
  return products.filter(product =>
    product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
};

const mapStateToProps = state => {
  return {
    products: sortBySearch(state.products, state.filter.searchQuery),
    searchQuery: state.filter.searchQuery
  }
}

export default withRouter(connect(mapStateToProps)(Products))
