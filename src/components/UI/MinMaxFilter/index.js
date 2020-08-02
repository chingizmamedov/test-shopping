import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const MinMaxFilter = ({ maxPrice, minPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div className="d-flex">
      <div className="mr-4">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Min price</Form.Label>
          <Form.Control
            size="sm"
            type="number"
            value={minPrice}
            onChange={setMinPrice}
            style={{
              width: '80px',
            }}
            min={0}
          />
        </Form.Group>
      </div>
      <div className="">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Max price</Form.Label>
          <Form.Control
            size="sm"
            type="number"
            style={{
              width: '80px',
            }}
            value={maxPrice}
            onChange={setMaxPrice}
            min={0}
          />
        </Form.Group>
      </div>
    </div>
  );
};

MinMaxFilter.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  setMinPrice: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
};

export default MinMaxFilter;
