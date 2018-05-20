import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from './Home';
import Contacts from './Contacts';
import Company from './Company';
import ProductInfo from './ProductInfo'

const Content = (props) => {
  const { items } = props;
  return(
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/contacts" component={Contacts} />
        <Route path="/product/:productId" render={({ match }) => (
          <ProductInfo details={items.find(p => p.id === match.params.productId)} />
        )} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.products
  }
}

export default withRouter(connect(mapStateToProps)(Content));
