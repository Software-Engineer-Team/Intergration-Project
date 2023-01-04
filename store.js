import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profile";
import userReducer from "./features/user";
import jobReducer from "./features/job";
import resumeReducer from "./features/resume";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    user: userReducer,
    job: jobReducer,
    resume: resumeReducer,
  },
});
