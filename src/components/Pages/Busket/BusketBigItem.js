import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { store } from 'react-notifications-component';
import PropTypes from 'prop-types';
import styles from '../../SidebarBusket/SidebarBusket.module.scss';
import {
  addProductToBusket,
  deleteProductFromBusket,
  getFromStock,
  receiveToStok,
} from '../../../Redux/actions';

const BusketBigItem = ({
  src,
  name,
  count,
  amount,
  item,
  deleteItem,
  receiveItem,
  addProductToBusketDispatch,
  getFromStockDisPatch,
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
                  receiveItem(item);
                }}
              >
                -
              </div>
              <span>{count}</span>
              <div
                role="button"
                onClick={() => {
                  if (stok > 0) {
                    addProductToBusketDispatch(item);
                    getFromStockDisPatch(item);
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
  receiveItem: (item) => dispatch(receiveToStok(item)),
  addProductToBusketDispatch: (product) => dispatch(addProductToBusket(product)),
  getFromStockDisPatch: (product) => dispatch(getFromStock(product)),
});

BusketBigItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  receiveItem: PropTypes.func.isRequired,
  addProductToBusketDispatch: PropTypes.func.isRequired,
  getFromStockDisPatch: PropTypes.func.isRequired,
  allProducts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusketBigItem);
