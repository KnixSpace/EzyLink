import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  getUrl: false,
};

const shortUrlSlice = createSlice({
  name: "shortUrlPage",
  initialState,
  reducers: {
    getUrlOpen: (state, action) => {
      state.getUrl = true;
    },
    getUrlClose: (state, action) => {
      state.getUrl = false;
    },
  },
});

export const { getUrlOpen, getUrlClose } = shortUrlSlice.actions;
export default shortUrlSlice.reducer;
