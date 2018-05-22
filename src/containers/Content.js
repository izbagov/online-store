import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import Content from "../components/Content"

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapStateToProps)(Content));
