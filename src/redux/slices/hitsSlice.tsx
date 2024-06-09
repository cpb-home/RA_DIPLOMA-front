import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IHitsListReducer } from "../../models/interfaces"

const initialState = {
  loading: false,
  error: '',
  hits: [
    
  ]
} as IHitsListReducer;

export const fetchHitsList = createAsyncThunk(
  'hitsList/fetchHitsList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_HITS_URL);

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

export const hitsSlice = createSlice({
  name: 'hitsList',
  initialState,
  selectors: {
    hits: (state) => state.hits
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchHitsList.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(fetchHitsList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.hits = action.payload;
    })
    .addCase(fetchHitsList.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
  }
})

export default hitsSlice.reducer;
export const { hits } = hitsSlice.selectors;