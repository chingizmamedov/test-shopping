import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BusketItem from './BusketItem';
import styles from './SidebarBusket.module.scss';

const SidebarBusket = ({ buyProduct, handleShowMiniList }) => {
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
    <div
      onMouseLeave={handleShowMiniList}
      className={`d-flex flex-column busket-mini-list pt-4 ${styles.mini_busket}`}
    >
      <h3>Sizin səbətiniz</h3>
      <div className={styles.list_wrapper}>
        <TransitionGroup className="">
          {buyProduct.map((item) => {
            const { src, name, count, amount } = item;
            return (
              <CSSTransition key={src} timeout={400} classNames="item">
                <BusketItem
                  key={src}
                  item={item}
                  src={src}
                  name={name}
                  count={count}
                  amount={amount}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>

      {buyProduct.length !== 0 && (
        <div className={styles.list_buy}>
          <div className="d-flex flex-column pl-5 pr-5 pt-5 pb-4">
            <div
              style={{
                fontSize: '14px',
              }}
              className="d-flex  justify-content-between"
            >
              <span>
                Say: <b>{state[0]}</b>
              </span>

              <span>
                Cəm qiymət: <b>{state[1]}</b>
              </span>
            </div>
            <div className="d-flex">
              <Link className="btn btn-success mt-4 w-100" to="/busket" variant="success">
                Go Buy :)
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ busketReducer }) => ({
  buyProduct: busketReducer.buyProducts,
});

export default connect(mapStateToProps)(SidebarBusket);
