const addProductToBusket = (product) => ({
  type: 'ADD_PRODUCT_TO_BUSKET',
  product,
});

const deleteProductFromBusket = (product) => ({
  type: 'DELETE_PRODUCT_FROM_BUSKET',
  product,
});

const getFromStock = (product) => ({
  type: 'GET_FROM_STOK',
  product,
});

const receiveToStok = (product) => ({
  type: 'RECEIVE_TO_STOK',
  product,
});

export { addProductToBusket, getFromStock, deleteProductFromBusket, receiveToStok };
