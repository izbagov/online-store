import React from 'react';
import {
  Container
} from 'semantic-ui-react'

import Header from './Header'
import Content from '../containers/Content'

const App = () => (
  <div className="main">
    <Container>
      <Header />
      <Content />
    </Container>
  </div>
)

export default App;
