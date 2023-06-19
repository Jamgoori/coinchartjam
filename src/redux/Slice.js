import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'chartView',
  initialState: 0,
  reducers: {

  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;