import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ src, name, amount, index }) => {
  return (
    <Card className="mt-1 mb-1" style={{ width: 'auto' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>
          Price: {amount}, index : {index}
        </Card.Title>
        <Card.Text title={name}>{name.slice(0, 30)}</Card.Text>
        <Button variant="primary">Go busket</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
