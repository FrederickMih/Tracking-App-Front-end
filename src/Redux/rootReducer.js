import { combineReducers } from 'redux';
import userReducer from './slicers/user';
import measurementReducer from './slicers/measurement';
import measureReducer from './slicers/measure';

export default combineReducers({
  user: userReducer,
  measurement: measurementReducer,
  measure: measureReducer,
});
