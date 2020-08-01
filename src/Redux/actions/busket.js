const addProductToBusket = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_BUSKET',
    product,
  };
};

const getFromStock = (product) => {
  return {
    type: 'GET_FROM_STOK',
    product,
  };
};

export { addProductToBusket, getFromStock };
