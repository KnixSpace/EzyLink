import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-signup/loginSlice";
import shortUrlReducer from "./pages/shortUrl/shortUrlSlice";
export const store = configureStore({
  reducer: {
    loginPage: loginReducer,
    shortUrlPage: shortUrlReducer,
  },
});
