import React from "react"
import { Switch, Route } from "react-router-dom";

import Home from "./Home"
import Contacts from "./Contacts"
import Company from "./Company"
import ProductInfo from "./ProductInfo"

const Content = ({ products }) => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/contacts" component={Contacts} />
        <Route
          path="/product/:productId"
          render={({ match }) => (
            <ProductInfo
              details={products.find(p => p.id === match.params.productId)}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Content