import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import BusketItem from '../../SidebarBusket/BusketItem';
import styles from './Busket.module.scss';
import BusketBigItem from './BusketBigItem';

const BusketPage = ({ buyProduct }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let count = 0;
    let allCost = 0;
    buyProduct.forEach((item) => {
      count += parseInt(item.count);
      allCost += parseInt(item.count) * parseInt(item.amount);
    });
    setState([count, allCost]);
  }, [buyProduct]);
  return (
    <div className="p-3">
      <div className="d-flex w-100">
        <div className="d-flex flex-column mr-5">
          <h2>Selected products</h2>
          <div className={`d-flex flex-column products-list ${styles.busket_wrap}`}>
            {buyProduct.length ? (
              buyProduct.map((item) => {
                const { src, name, count, amount } = item;
                return (
                  <BusketBigItem
                    key={src}
                    item={item}
                    src={src}
                    name={name}
                    count={count}
                    amount={amount}
                  />
                );
              })
            ) : (
              <span>No product select</span>
            )}
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className={`d-flex flex-column pt-4 ${styles.all_info}`}>
            <span>All count: {state[0]}</span>
            <span>All amount: {state[1]}</span>
          </div>
          <Button disabled={!buyProduct.length} className="mt-3" variant="success">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ busketReducer }) => ({
  buyProduct: busketReducer.buyProducts,
});

export default connect(mapStateToProps)(BusketPage);
