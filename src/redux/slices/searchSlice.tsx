import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchText: ''
}

export const searchSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.searchText = action.payload;
    }
  }
});

export default searchSlice.reducer;
export const { setText } = searchSlice.actions;
