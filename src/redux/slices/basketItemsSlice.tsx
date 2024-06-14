import { createSlice } from "@reduxjs/toolkit"
import { BasketItemsReducer } from "../../models/interfaces"

const initialState = {
  items: [

  ]
} as BasketItemsReducer

const basketItemsSlice = createSlice({
  name: 'basketItemsCount',
  initialState,
  reducers: {
    basketAdd: (state, action) => {
      if (state.items.every(e => e.id !== action.payload.id || e.size !== action.payload.size)) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          size: action.payload.size,
          quantity: action.payload.quantity,
          price: action.payload.price,
        });
      } else {
        state.items.forEach((e, i, arr) => {
          if (e.id === action.payload.id && e.size === action.payload.size) {
            arr[i].quantity += 1;
          }
        })
      }
      localStorage.setItem('raDiplomaBasketItems', JSON.stringify(state.items));
    },
    basketRemove: (state, action) => {
      state.items = state.items.filter(e => !(e.id === action.payload.id && e.size === action.payload.size) );
      localStorage.setItem('raDiplomaBasketItems', JSON.stringify(state.items));
    },
    basketClear: (state) => {
      state.items = [];
    },
    basketSet: (state, action) => {
      if (state.items.length === 0) {
        state.items = action.payload;
      }
    }
  }
});

export const { basketAdd, basketRemove, basketClear, basketSet } = basketItemsSlice.actions;
export default basketItemsSlice.reducer;
