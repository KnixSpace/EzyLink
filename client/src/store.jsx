import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-signup/loginSlice";
export const store = configureStore({
  reducer: {
    loginPage: loginReducer,
  },
});
