import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  journals: [],
  searchResults: [],
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    setJournals: (state, action) => {
      state.journals = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = journalSlice.actions;

export const selectJournals = (state) => state.journal.journals;
export const selectSearchResults = (state) => state.journal.searchResults;

export default journalSlice.reducer;
