import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from '../utils/constants';

const initialState = {
  data: dummyData || [],
  isSelected: false,
  selectedDate: false,
  isLoading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDateStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    selectDateSuccess: (state, action) => {
      state.data = action.payload.data;
      state.selectedDate = action.payload.selectedDate;
      state.isLoading = false;
    },
    selectDateFailure: (state, action) => {
      state.data = [];
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const { selectDateStart, selectDateSuccess, selectDateFailure } = calendarSlice.actions;

export default calendarSlice.reducer;