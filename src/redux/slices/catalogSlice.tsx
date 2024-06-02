import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICatalogListReducer } from "../../models/interfaces"

const initialState = {
  loading: false,
  error: '',
  catalog: [
    
  ]
} as ICatalogListReducer;

export const fetchCatalogList = createAsyncThunk(
  'catalogList/fetchCatalogList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_CATALOG_URL);

      if (!response.ok) {
        return rejectWithValue('Loading error');
      }

      return await response.json();
    } catch(e) {
      return rejectWithValue(e);
    }
  }
);

export const catalogSlice = createSlice({
  name: 'catalogList',
  initialState,
  selectors: {
    catalog: (state) => state.catalog
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCatalogList.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(fetchCatalogList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.catalog = action.payload;
    })
    .addCase(fetchCatalogList.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
  }
})

export default catalogSlice.reducer;
export const { catalog } = catalogSlice.selectors;