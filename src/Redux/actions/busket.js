const addProductToBusket = (product) => ({
  type: 'ADD_PRODUCT_TO_BUSKET',
  product,
});

const deleteProductFromBusket = (product) => ({
  type: 'DELETE_PRODUCT_FROM_BUSKET',
  product,
});

const getFromStock = (products) => ({
  type: 'GET_FROM_STOK',
  products,
});

const receiveToStok = (product) => ({
  type: 'RECEIVE_TO_STOK',
  product,
});

export { addProductToBusket, getFromStock, deleteProductFromBusket, receiveToStok };
