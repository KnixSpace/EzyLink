import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLargeMenu: true,
};

const lgMenuSilce = createSlice({
  name: "lgMenuPage",
  initialState,
  reducers: {
    lgMenuToggle: (state, action) => {
      const task = action.payload;
      state.isLargeMenu = task;
    },
  },
});

export const { lgMenuToggle } = lgMenuSilce.actions;
export default lgMenuSilce.reducer;
