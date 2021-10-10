import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import measurementsReducer from './measurementsReducer';
import userData from './user_data';

const middleware = [thunk];
const initialState = {};

export const rootReducer = combineReducers({
  user: authReducer,
  measurements: measurementsReducer,
  userData,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
