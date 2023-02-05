import { configureStore } from "@reduxjs/toolkit";
import posts from "./reducers/post";

export const store = configureStore({
  reducer: {
    posts,
  },
});
