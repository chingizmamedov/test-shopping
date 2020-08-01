import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import styles from './SidebarBusket.module.scss';

const SidebarBusket = ({ buProduct }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let count = 0;
    let allCost = 0;
    buProduct.forEach((item) => {
      count += parseInt(item.count);
      allCost += parseInt(item.count) * parseInt(item.amount);
    });
    setState([count, allCost]);
  }, [buProduct]);
  return (
    <>
      {buProduct.map((item) => (
        <div className={`d-flex align-items-center position-relative mb-2 ${styles.item}`}>
          <img src={item.src} alt="product" />
          {item.name}
          <Badge
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
            }}
            variant="info"
          >
            {item.count}
          </Badge>
        </div>
      ))}
      <span>All count: {state[0]}</span>
      <span>All amount: {state[1]}</span>
    </>
  );
};

const mapStateToProps = ({ busketReducer }) => ({
  buProduct: busketReducer.buyProducts,
});

export default connect(mapStateToProps)(SidebarBusket);
