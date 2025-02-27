import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isSelected: false,
  selectedDate: false,
  isLoading: false,
  error: null,
};

const calenderSlice = createSlice({
  name: 'calender',
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

export const { selectDateStart, selectDateSuccess, loadCountrieselectDateFailuresFailure } = calenderSlice.actions;

export default calenderSlice.reducer;