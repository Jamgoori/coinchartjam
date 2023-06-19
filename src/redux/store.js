import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice.js'

const store = configureStore({
  reducer: {
    chartView: counterReducer,
  },
});

export default store;
