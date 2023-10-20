import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarActive: (state, action) => {
      state.isSidebar = true;
    },
    sidebarInactive: (state, action) => {
      state.isSidebar = false;
    },
  },
});

export const { sidebarActive, sidebarInactive } = sidebarSlice.actions;
export default sidebarSlice.reducer;
