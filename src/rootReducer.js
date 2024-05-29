// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers if any
});

export default rootReducer;


