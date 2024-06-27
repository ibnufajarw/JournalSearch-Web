import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "./features/journal/journalSlice";

const store = configureStore({
  reducer: {
    journal: journalReducer,
  },
});

export default store;
