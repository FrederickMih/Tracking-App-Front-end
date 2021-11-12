import { ConfigureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import api from './middleware/api';

const configureAppStore = () => {
  return configureStore({
    reducer,
    middleware: [api],
  });
};

export default configureAppStore;
