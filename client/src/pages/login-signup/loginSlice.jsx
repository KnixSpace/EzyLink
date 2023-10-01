import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const loginSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    openPage: (state, action) => {
      state.isOpen = true;
    },
    closePage: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openPage, closePage } = loginSlice.actions;
export default loginSlice.reducer;
