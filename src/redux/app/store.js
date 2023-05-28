import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import sidebarReducer from "../features/sidebarSlice";
import guestsReducer from "../features/guestsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    guest: guestsReducer,
  },
});
