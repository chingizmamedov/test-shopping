import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Jumbotron } from 'react-bootstrap';
import ProductCard from '../ProductCard';

const ProductList = ({ products, page, setFilteredItemLength, minPrice, maxPrice }) => {
  const { cat } = useParams();
  const [slicedItems, setSlicedItems] = useState([]);
  useEffect(() => {
    const parsedMin = parseInt(minPrice);
    const parsedMax = parseInt(maxPrice);
    const filteredProducts = products
      .filter((item) => item.stok > 0)
      .filter((item) => (cat === 'all' || cat === undefined ? true : item.categoryTitle === cat))
      .filter((item) => {
        const parsedAmount = parseInt(item.amount);
        return parsedMin > 0 ? parsedAmount > parsedMin : true;
      })
      .filter((item) => {
        const parsedAmount = parseInt(item.amount);
        return parsedMax > 0 ? parsedAmount < parsedMax : true;
      });
    setSlicedItems(filteredProducts.slice(page * 20, page * 20 + 20));
    setFilteredItemLength(filteredProducts.length);
  }, [cat, page, minPrice, maxPrice, products]);
  return (
    <>
      {slicedItems.length ? (
        <TransitionGroup
          className="todo-list row mt-3 ml-1 mr-1 w-100"
          style={{
            paddingLeft: '280px',
          }}
        >
          {slicedItems.map(({ src, name, amount, stok, count }, index) => (
            <CSSTransition key={src} timeout={500} classNames="item">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard
                  src={src}
                  name={name}
                  amount={amount}
                  stok={stok}
                  index={index}
                  count={count}
                />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div
          className="todo-list row mt-3 ml-1 mr-1"
          style={{
            paddingLeft: '280px',
            minHeight: '85vh',
          }}
        >
          <Jumbotron className="w-100 d-flex justify-content-center align-items-center">
            <p>Qeyd etdiyiniz sorğu üzrə məhsul mövcud deyil.</p>
          </Jumbotron>
        </div>
      )}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setFilteredItemLength: PropTypes.func.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
};

export default ProductList;
