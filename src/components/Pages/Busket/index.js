import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Busket.module.scss';
import BusketBigItem from './BusketBigItem';
import { getFromStock } from '../../../Redux/actions';

const BusketPage = ({ buyProduct, getFromStok }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let count = 0;
    let allCost = 0;
    buyProduct.forEach((item) => {
      count += parseInt(item.count);
      allCost += parseInt(item.count) * parseInt(item.amount);
    });
    setState([count, allCost]);
    if (buyProduct.length === 0) window.location.href = '/';
  }, [buyProduct]);

  return (
    <div className="p-5">
      <div className="d-flex w-100 p-5 mb-5">
        <div className="d-flex flex-column w-50 mr-5 pl-4 pr-4">
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
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column">
            <div className={`d-flex flex-column pt-4 ${styles.all_info}`}>
              <span>Say : {state[0]}</span>
              <span>Cəm qiymət : {state[1]}</span>
            </div>
            <Button
              onClick={() => getFromStok(buyProduct)}
              disabled={!buyProduct.length}
              className="w-75 mt-3"
              variant="success"
            >
              Buy
            </Button>
          </div>
          <div className={`d-flex flex-column ${styles.additional}`}>
            <div className="info-block mt-3">
              <Card>
                <Card.Header as="h5">Əlavə</Card.Header>
                <Card.Body>
                  <Card.Title>Seçilən məhsullar aryrıca saxlanılır</Card.Title>
                  <Card.Text>
                    Məhsulları almaq düyməsini basanda Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ipsam, repellendus!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ busketReducer }) => ({
  buyProduct: busketReducer.buyProducts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFromStok: (products) => dispatch(getFromStock(products)),
  };
};

BusketPage.propTypes = {
  buyProduct: PropTypes.array.isRequired,
  getFromStok: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusketPage);
