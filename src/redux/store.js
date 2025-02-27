import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './calendarSlice';

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
  },
});

export default store;