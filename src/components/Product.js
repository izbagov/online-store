import React from 'react';
import {
  Card,
  Button,
  Image
} from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return <Card key={data.id}>
      <Card.Content>
        <div className="card-image">
          <Image src={data.image} size="small" />
        </div>
        <Card.Header className="card-header">{data.name}</Card.Header>
        <Button as={Link} to={`/product/${data.id}`} primary>
          Подробнее
        </Button>
      </Card.Content>
    </Card>;
}

export default Product
