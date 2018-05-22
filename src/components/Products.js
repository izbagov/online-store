import React from "react"
import { Grid, Card } from "semantic-ui-react"

import Product from "./Product"

const Products = (props) => {
  const { products } = props
  return (
    <Grid.Column width={12}>
      <Card.Group itemsPerRow={3}>
        {products.map((product) => (
            <Product data={product} key={product.id} />
          ))
        }
      </Card.Group>
    </Grid.Column>
  )
}

export default Products