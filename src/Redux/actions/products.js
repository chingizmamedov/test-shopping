const selectCat = (selectedCat) => {
  return {
    type: 'SELECT_CAT',
    selectedCat,
  };
};

export default selectCat;
