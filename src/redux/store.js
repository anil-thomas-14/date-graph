import { configureStore } from '@reduxjs/toolkit';
import calenderSlice from './calenderSlice';

const store = configureStore({
  reducer: {
    calender: calenderSlice,
  },
});

export default store;