import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ItemCardReducer } from "../../models/interfaces";

const initialState = {
  loading: false,
  error: '',
  itemInfo: null
} as ItemCardReducer;

export const fetchItemInfo = createAsyncThunk(
  'itemInfo/fetchItemInfo',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_CATALOG_URL + '/' + id);

      if (!response.ok) {
        return rejectWithValue('Loading error');
      }

      const resp = await response.json();
      return resp;
    } catch(e) {
      return rejectWithValue(e);
    }
  }
);


const itemCardSlice = createSlice({
  name: 'itemInfo',
  initialState,
  selectors: {
    itemInfo: (state) => state.itemInfo
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchItemInfo.pending, (state) => {
      state.loading = true,
      state.error = '',
      state.itemInfo = null
    })
    .addCase(fetchItemInfo.fulfilled, (state, action) => {
      state.error = '',
      state.loading = false,
      state.itemInfo = action.payload
    })
    .addCase(fetchItemInfo.rejected, (state, action) => {
      state.error = action.payload as string,
      state.loading = false
    })
  }
});

export default itemCardSlice.reducer;
export const { itemInfo } = itemCardSlice.selectors;
