import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from '../utils/constants';

const initialState = {
  data: dummyData || [],
  userData: [],
  selectedDate: null,
  isLoading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      console.log('action', action)
      state.selectedDate = action.payload.selectedDate;
      state.userData = action.payload.userData;
      state.isLoading = false;
    },
  },
});

export const { selectDate } = calendarSlice.actions;

export default calendarSlice.reducer;