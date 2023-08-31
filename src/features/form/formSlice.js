import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

export const formSlice = createSlice({
  name: "form",
  initialState: {
    type: true,
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      id: null,
      name: "",
      value: null,
    },
    addons: [],
  },
  reducers: {
    type: (state = initialState, action) => {
      return {
        ...state,
        type: action.payload,
      };
    },
    step1: (state = initialState, action) => {
      return {
        ...state,
        personalInfo: action.payload,
      };
    },
    step2: (state = initialState, action) => {
      return {
        ...state,
        plan: action.payload,
      };
    },
    step3: (state = initialState, action) => {
      return { ...state, addons: action?.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { type, step1, step2, step3 } = formSlice.actions;

export default formSlice.reducer;
