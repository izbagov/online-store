import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setSearchQuery } from "../actions/hooks";
import Search from "../components/Search";

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setSearchQuery}, dispatch)
);

export default connect(null, mapDispatchToProps)(Search);
