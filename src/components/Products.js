import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card } from 'semantic-ui-react';

import Product from './Product';

const Products = (props) => {
  return (
    <Grid.Column width={12}>
      <Card.Group itemsPerRow={3}>
        {
          props.products.items.map((item, index) => (
            <Product data={item} key={index} />
          ))
        }
      </Card.Group>
    </Grid.Column>
  )
}

const mapStateToProps = state => {
  return {
    products: state
  }
}

export default connect(mapStateToProps)(Products)
