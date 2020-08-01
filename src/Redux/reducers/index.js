import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import busketReducer from './busketReducer';

export default combineReducers({
  productsReducer,
  busketReducer,
});
