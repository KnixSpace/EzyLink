import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-signup/loginSlice";
import shortUrlReducer from "./pages/shortUrl/shortUrlSlice";
import limitReducer from "./components/Limit/limitSlice";
export const store = configureStore({
  reducer: {
    loginPage: loginReducer,
    shortUrlPage: shortUrlReducer,
    limitPage: limitReducer,
  },
});
