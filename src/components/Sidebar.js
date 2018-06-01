import React from 'react';
import { Grid } from 'semantic-ui-react';

import Search from '../containers/Search';
import News from '../containers/News';

const Sidebar = () => {
  return (
    <Grid.Column width={4}>
      <Search />
      <News />
    </Grid.Column>
  )
}

export default Sidebar;
