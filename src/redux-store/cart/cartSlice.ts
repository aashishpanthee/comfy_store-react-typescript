import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'cart slice',
};
const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
