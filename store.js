import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profile";
import userReducer from "./features/user";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    user: userReducer,
  },
});
