import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import _ from 'lodash';
import PropTypes from 'prop-types';
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
      message: 'Seçmək üçün daxil olmalısız!',
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
      message: 'Məhsul sayı məhduddur!....',
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
          Qiymət: {amount} AZN
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

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  stok: PropTypes.number.isRequired,
  addProductToBusketDispatch: PropTypes.func.isRequired,
  allProducts: PropTypes.array.isRequired,
  buyProducts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
