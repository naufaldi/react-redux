import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import colorReducer from './colorSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
});

export default store;
