import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Company from './Company';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </div>
  )
}

export default Content;
