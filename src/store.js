import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import notesReducer from './noteSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
});

export default store;
