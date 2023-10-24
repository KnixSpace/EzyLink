import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSmallMenu: false,
};

const smMenuSlice = createSlice({
  name: "smMenuPage",
  initialState,
  reducers: {
    smMenuOpen: (state, actions) => {
      state.isSmallMenu = true;
    },
    smMenuClose: (state, actions) => {
      state.isSmallMenu = false;
    },
  },
});

export const { smMenuClose, smMenuOpen } = smMenuSlice.actions;
export default smMenuSlice.reducer;
