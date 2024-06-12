import { createSlice } from "@reduxjs/toolkit"
import { BasketItemsReducer } from "../../models/interfaces"

const initialState = {
  items: 0
} as BasketItemsReducer

const basketItemsSlice = createSlice({
  name: 'basketItemsCount',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = action.payload;
    },
    remove: (state, action) => {
      state.items = action.payload;
    },
    clear: (state) => {
      state.items = 0;
    }
  }
});

export const { add, remove, clear } = basketItemsSlice.actions;
export default basketItemsSlice.reducer;
