import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICatalogCategoriesReducer } from "../../models/interfaces";

const initialState = {
  loading: false,
  error: '',
  categories: [

  ],
  current: 0
} as ICatalogCategoriesReducer;

export const fetchCatCategories = createAsyncThunk(
  'catCategories/fetchCatCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_CATALOG_CATS_URL);

      if (!response.ok) {
        return rejectWithValue('Loading error');
      }

      return await response.json();
    } catch(e) {
      return rejectWithValue(e);
    }
  }
);

export const catalogCategoriesSlice = createSlice({
  name: 'catCategories',
  initialState,
  selectors: {
    categories: (state) => state.categories
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.current = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCatCategories.pending, (state) => {
      state.loading = true;
      state.error = '';
      state.categories = [];
    })
    .addCase(fetchCatCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.categories = action.payload;
    })
    .addCase(fetchCatCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
});

export default catalogCategoriesSlice.reducer;
export const { categories } = catalogCategoriesSlice.selectors;
export const { setCurrentCategory } = catalogCategoriesSlice.actions;
