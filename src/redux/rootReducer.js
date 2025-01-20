import { combineReducers } from 'redux';
import itemsReducer from './items/slice.js';

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
