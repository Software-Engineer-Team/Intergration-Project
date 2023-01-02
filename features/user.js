import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  token: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // Actions that allow us to modify the global store
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.id = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const selectRole = (state) => state.user.role;

export default userSlice.reducer;
