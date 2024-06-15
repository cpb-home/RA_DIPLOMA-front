import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICatalogListReducer, SortProps } from "../../models/interfaces"

const initialState = {
  loading: false,
  error: '',
  catalog: [
    
  ],
  more: true
} as ICatalogListReducer;

export const fetchCatalogList = createAsyncThunk(
  'catalogList/fetchCatalogList',
  async (sortProps: SortProps) => {
    let offsetProp = sortProps.offset && sortProps.offset !== '0' ? 'offset=' + sortProps.offset : '';
    const categoryProp = sortProps.categoryId && sortProps.categoryId !== '0' ? 'categoryId=' + sortProps.categoryId : '';
    offsetProp = offsetProp && categoryProp ? '&' + offsetProp : offsetProp;
    
    return await fetch(import.meta.env.VITE_CATALOG_URL + '?' + categoryProp + offsetProp)
    .then(res => res.json());
  }
);

export const catalogSlice = createSlice({
  name: 'catalogList',
  initialState,
  selectors: {
    catalog: (state) => state.catalog
  },
  reducers: {
    clearCatalog: (state) => {
      state.catalog = [];
    }
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
      state.catalog = [...state.catalog, ...action.payload];
      if (action.payload.length < 6) {
        state.more = false;
      } else {
        state.more = true; 
      }
    })
    .addCase(fetchCatalogList.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
  }
})

export default catalogSlice.reducer;
export const { catalog } = catalogSlice.selectors;
export const { clearCatalog } = catalogSlice.actions;