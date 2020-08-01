import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ src, name, amount }) => {
  return (
    <Card className="mt-1 mb-4" style={{ width: '98%' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>Price: {amount} AZN</Card.Title>
        <Card.Text title={name}>{name.slice(0, 30)}</Card.Text>
        <Button variant="primary">Go busket</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
