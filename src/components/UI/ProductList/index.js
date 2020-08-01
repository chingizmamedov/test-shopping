import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';

const ProductList = ({ products, page, setFilteredItemLength }) => {
  const { cat } = useParams();
  const [slicedItems, setSlicedItems] = useState([]);

  useEffect(() => {
    console.log('cat', cat);
    const filteredProducts = products.filter((item) =>
      cat === 'all' ? true : item.categoryTitle === cat
    );
    setSlicedItems(filteredProducts.slice(page * 20, page * 20 + 20));
    setFilteredItemLength(filteredProducts.length);
  }, [cat]);
  return (
    <div className="row mt-3 ml-1 mr-1">
      {products.length
        ? slicedItems.map(({ src, name, amount }, index) => (
            <div key={name + amount + index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard src={src} name={name} amount={amount} index={index} />
            </div>
          ))
        : 'Sprry no pri'}
    </div>
  );
};

export default ProductList;
