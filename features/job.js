import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  address: "",
  type: "",
  requirements: "",
  experience: 0,
  min_salary: 0,
  max_salary: 0,
  email: "",
  description: "",
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  // Actions that allow us to modify the global store
  reducers: {
    setJobState(state, action) {
      state.title = action.payload.title;
      state.address = action.payload.address;
      state.type = action.payload.type;
      state.requirements = action.payload.category;
      state.experience = action.payload.experience;
      state.min_salary = action.payload.min_salary;
      state.max_salary = action.payload.max_salary;
      state.email = action.payload.email;
      state.description = action.payload.description;
    },
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setDescription(state, action) {
      state.description = action.payload.description;
    },
    setTitle(state, action) {
      state.title = action.payload.title;
    },
    setAddress(state, action) {
      state.address = action.payload.address;
    },
    setType(state, action) {
      state.type = action.payload.type;
    },
    setRequirements(state, action) {
      state.requirements = action.payload.category;
    },
    setExperience(state, action) {
      state.experience = action.payload.experience;
    },
    setMinSalary(state, action) {
      state.min_salary = action.payload.min_salary;
    },
    setMaxSalary(state, action) {
      state.max_salary = action.payload.max_salary;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setJobState,
  setEmail,
  setRequirements,
  setType,
  setExperience,
  setMinSalary,
  setMaxSalary,
  setAddress,
  setTitle,
  setDescription,
} = jobSlice.actions;

export const selectJobState = (state) => state.job;

export default jobSlice.reducer;
