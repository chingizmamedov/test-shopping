import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Jumbotron } from 'react-bootstrap';
import ProductCard from '../ProductCard';

const ProductList = ({ products, page, setFilteredItemLength, minPrice, maxPrice, a }) => {
  const { cat } = useParams();
  const [slicedItems, setSlicedItems] = useState([]);

  useEffect(() => {
    const parsedMin = parseInt(minPrice);
    const parsedMax = parseInt(maxPrice);
    const filteredProducts = products
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
  }, [cat, page, minPrice, maxPrice]);
  return (
    <TransitionGroup
      className="todo-list row mt-3 ml-1 mr-1 w-100"
      style={{
        paddingLeft: '280px',
      }}
    >
      {slicedItems.length ? (
        slicedItems.map(({ src, name, amount, stok }, index) => (
          <CSSTransition
            key={name + amount + index}
            timeout={500}
            classNames="col-12 col-sm-6 col-md-4 col-lg-3 item"
          >
            <div>
              <ProductCard src={src} name={name} amount={amount} stok={stok} index={index} />
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>Pox</p>
      )}
    </TransitionGroup>
  );
};

export default ProductList;
