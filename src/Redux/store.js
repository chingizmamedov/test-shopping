import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);
const store = createStore(rootReducer, undefined, composeWithDevTools(composedEnhancers));

export default store;
