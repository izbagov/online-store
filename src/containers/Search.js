import { connect } from "react-redux";

import { setSearchQuery } from "../actionTypes";
import Search from "../components/Search";

const mapDispatchToProps = dispatch => {
  return {
    setSearchQuery: text => dispatch(setSearchQuery(text))
  };
};

export default connect(null, mapDispatchToProps)(Search);
