import React from 'react'
import {
  Grid,
  Image,
  Message,
  Header,
  Divider
} from "semantic-ui-react";

export default ({ details}) => {
  console.log(details);
  return <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={details.image} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h1">Name: {details.name}</Header>
          <Header as="h3">Price: {details.price}$</Header>
          <Divider horizontal>Information</Divider>
          <Message.List>
            <Message.Item>Battery: {details.battery}</Message.Item>
            <Message.Item>Camera: {details.camera}</Message.Item>
            <Message.Item>CPU: {details.cpu}</Message.Item>
            <Message.Item>Display: {details.display}</Message.Item>
            <Message.Item>Memory: {details.memory}</Message.Item>
            <Message.Item>Size: {details.size}</Message.Item>
            <Message.Item>Weight: {details.weight}</Message.Item>
          </Message.List>
          <Divider horizontal>Description</Divider>
          <Message compact>{details.description}</Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>;
};
