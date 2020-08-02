import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import _ from 'lodash';
import { addProductToBusket } from '../../../Redux/actions';

const ProductCard = ({
  src,
  name,
  amount,
  stok,
  addProductToBusketDispatch,
  allProducts,
  buyProducts,
}) => {
  const [count, setCount] = useState(0);
  const [cookie] = useCookies(['token']);
  const currElement = allProducts.filter(
    (item) => item.name === name && item.amount === amount && item.src === src
  )[0];
  const addNotifyCookie = () => {
    store.addNotification({
      message: 'You need sign in to select item',
      type: 'danger',
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
  const addNotify = () => {
    store.addNotification({
      message: 'no item on stok, sorry!...',
      type: 'info',
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

  useEffect(() => {
    const index = _.findIndex(buyProducts, { src });
    if (index > -1) {
      const { count } = buyProducts[index];
      setCount(count);
    }
  }, [buyProducts]);
  return (
    <Card className="mt-1 mb-4" style={{ width: '98%' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="b">{name.slice(0, 30)}...</Card.Title>
        <Card.Text
          style={{
            fontSize: '12px',
            margin: '0',
          }}
          as="span"
          title={name}
        >
          Giymət: {amount} AZN
        </Card.Text>
        <div className="d-flex flex-column-reverse">
          <Button
            size="sm"
            className="mt-2"
            onClick={() => {
              if (!cookie.token) {
                addNotifyCookie();
                return;
              }
              if (stok <= count) {
                addNotify();
              } else {
                addProductToBusketDispatch(currElement);
              }
            }}
            variant="primary"
          >
            Səbətə
          </Button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
