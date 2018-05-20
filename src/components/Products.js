import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Card } from 'semantic-ui-react'

import Product from './Product';

const Products = (props) => {
  return <Grid.Column width={12}>
      <Card.Group itemsPerRow={3}>
        {props.products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </Card.Group>
    </Grid.Column>;
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapStateToProps)(Products))
