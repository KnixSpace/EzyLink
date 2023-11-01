import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCredit: false,
};

const creditSlice = createSlice({
  name: "creditPage",
  initialState,
  reducers: {
    openCredit: (state, action) => {
      state.isCredit = true;
    },
    closeCredit: (state, action) => {
      state.isCredit = false;
    },
  },
});

export const { closeCredit, openCredit } = creditSlice.actions;
export default creditSlice.reducer;
