import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import { connect } from 'react-redux';
import { addProductToBusket, getFromStock } from '../../../Redux/actions';

const ProductCard = ({
  src,
  name,
  amount,
  addProductToBusketDispatch,
  allProducts,
  stok,
  getFromStockDisPatch,
}) => {
  const currElement = allProducts.filter(
    (item) => item.name === name && item.amount === amount && item.src === src
  )[0];
  const addNotify = () => {
    store.addNotification({
      message: 'teodosii@react-notifications-component',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
  return (
    <Card className="mt-1 mb-4" style={{ width: '98%' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>Price: {amount} AZN</Card.Title>
        <Card.Text title={name}>{name.slice(0, 30)}</Card.Text>
        <div className="d-flex flex-column-reverse">
          <Button
            onClick={() => {
              if (stok === 0) {
                addNotify();
              } else {
                addProductToBusketDispatch(currElement);
                getFromStockDisPatch(currElement);
              }
            }}
            variant="primary"
          >
            Go busket
          </Button>
          <span>On stok: {stok}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ productsReducer, busketReducer }) => {
  return {
    buyProducts: busketReducer.buyProducts,
    allProducts: productsReducer.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToBusketDispatch: (product) => dispatch(addProductToBusket(product)),
    getFromStockDisPatch: (product) => dispatch(getFromStock(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
