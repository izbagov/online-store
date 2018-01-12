import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Grid,
  Card,
  Image,
  Button
} from 'semantic-ui-react'

class Content extends Component {
  renderProduct(item, index) {
    return(
      <Card key={item.id}>
        <Card.Content>
          <div className="card-image">
            <Image src={item.image} size='small' />
          </div>
          <Card.Header className="card-header">{item.name}</Card.Header>
          <Button primary>Подробнее</Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { products } = this.props
    return(
      <div className="content">
        <Grid>
          <Grid.Column width={4}>
            Sidebar
          </Grid.Column>
          <Grid.Column width={12}>
            <Card.Group itemsPerRow={3}>
              {
                products.items.map(item => this.renderProduct(item))
              }
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state
  }
}


export default connect(mapStateToProps)(Content);
