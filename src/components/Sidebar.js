import React from 'react';
import { Grid } from 'semantic-ui-react';

import Search from '../containers/Search';

const Sidebar = () => {
  return (
    <Grid.Column width={4}>
      <Search />
    </Grid.Column>
  )
}

export default Sidebar;
