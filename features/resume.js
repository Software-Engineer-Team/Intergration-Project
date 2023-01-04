import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  experience: "",
  skills: "",
  description: "",
  university: "",
  qualifications: "",
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  // Actions that allow us to modify the global store
  reducers: {
    setResumeDescription(state, action) {
      state.description = action.payload.description;
    },
    setResumePosition(state, action) {
      state.position = action.payload.position;
    },
    setResumeExperience(state, action) {
      state.experience = action.payload.experience;
    },
    setResumeSkills(state, action) {
      state.skills = action.payload.skills;
    },
    setResumeQualification(state, action) {
      state.qualifications = action.payload.qualification;
    },
    setResumeUniversity(state, action) {
      state.university = action.payload.university;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setResumePosition,
  setResumeSkills,
  setResumeDescription,
  setResumeExperience,
  setResumeUniversity,
  setResumeQualification,
} = resumeSlice.actions;

export const selectResume = (state) => state.resume;

export default resumeSlice.reducer;
