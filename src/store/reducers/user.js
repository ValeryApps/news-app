import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    isUserLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    isUserLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { isUserLoggedIn, isUserLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;
