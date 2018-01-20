import React from 'react';
import {
  Card,
  Button,
  Image
} from 'semantic-ui-react';

const Product = (props) => {
  const { data } = props;
  return (
    <Card key={data.id}>
      <Card.Content>
        <div className="card-image">
          <Image src={data.image} size='small' />
        </div>
        <Card.Header className="card-header">{data.name}</Card.Header>
        <Button primary>Подробнее</Button>
      </Card.Content>
    </Card>
  )
}

export default Product
