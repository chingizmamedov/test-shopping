import _ from 'lodash';

const initialState = {
  buyProducts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_BUSKET': {
      const oldAllProductsList = [...state.buyProducts];
      const index = _.findIndex(state.buyProducts, { src: action.product.src });
      if (index === -1) {
        oldAllProductsList.push({ ...action.product, count: 1 });
      } else {
        oldAllProductsList[index].count += 1;
      }
      return {
        ...state,
        buyProducts: oldAllProductsList,
      };
    }
    case 'DELETE_PRODUCT_FROM_BUSKET': {
      const oldAllProductsList = [...state.buyProducts];
      const index = _.findIndex(state.buyProducts, { src: action.product.src });
      const stokCount = oldAllProductsList[index].count;
      if (stokCount > 1) {
        oldAllProductsList[index].count -= 1;
      } else {
        oldAllProductsList.splice(index, 1);
      }
      return {
        ...state,
        buyProducts: oldAllProductsList,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
