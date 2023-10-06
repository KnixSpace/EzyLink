import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLimit: false,
};

const limitSlice = createSlice({
  name: "limitPage",
  initialState,
  reducers: {
    openLimit: (state, action) => {
      state.isLimit = true;
    },
    closeLimit: (state, action) => {
      state.isLimit = false;
    },
  },
});

export const { openLimit, closeLimit } = limitSlice.actions;
export default limitSlice.reducer;
