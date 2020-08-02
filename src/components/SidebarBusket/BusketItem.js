import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { store } from 'react-notifications-component';
import styles from './SidebarBusket.module.scss';
import { addProductToBusket, deleteProductFromBusket } from '../../Redux/actions';

const BusketItem = ({
  src,
  name,
  count,
  amount,
  item,
  deleteItem,
  addProductToBusketDispatch,
  allProducts,
}) => {
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
  const index = _.findIndex(allProducts, { src });
  const { stok } = allProducts[index];
  return (
    <div
      className={`d-flex align-items-start position-relative mb-2 pl-2 pr-2 pt-4 pb-4 ${styles.item}`}
    >
      <img className={styles.image} src={src} alt="product" />
      <div className="d-flex flex-column align-items-start justify-content-start flex-grow-1 flex-shrink-1  pt-2">
        <b>
          <p>{name}</p>
        </b>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-start justify-content-center">
            <div className={`d-flex ${styles.counter}`}>
              <div
                onClick={() => {
                  deleteItem(item);
                }}
              >
                -
              </div>
              <span>{count}</span>
              <div
                role="button"
                onClick={() => {
                  if (stok > count) {
                    addProductToBusketDispatch(item);
                  } else {
                    addNotify();
                  }
                }}
              >
                +
              </div>
            </div>
            <div className="mt-3">Cost: {count * amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    allProducts: productsReducer.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteProductFromBusket(item)),
  addProductToBusketDispatch: (product) => dispatch(addProductToBusket(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusketItem);
