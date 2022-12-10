import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProfile: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  // Actions that allow us to modify the global store
  reducers: {
    setShowProfile(state, action) {
      state.showProfile = action.payload.showProfile;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowProfile } = profileSlice.actions;

export const selectShowProfile = (state) => state.profile.showProfile;

export default profileSlice.reducer;
