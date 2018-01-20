import React from 'react';
import Sidebar from './Sidebar';
import Products from './Products';
import { Grid } from 'semantic-ui-react';

const Home = () => {
  return (
    <Grid>
      <Sidebar />
      <Products />
    </Grid>
  )
}

export default Home
