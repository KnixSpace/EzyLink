import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSmallMenu: false,
};

const smMenuSlice = createSlice({
  name: "smMenuPage",
  initialState,
  reducers: {
    smMenuToggle: (state, actions) => {
      const task = actions.payload;
      state.isSmallMenu = task;
    },
  },
});

export const { smMenuToggle } = smMenuSlice.actions;
export default smMenuSlice.reducer;
