import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk('popularSlice/fetchData', async () => {
  const response = await axios.get('https://www.reddit.com/r/popular.json');
  return response.data;
});


const popularSlice = createSlice({
  name: 'popularSlice',
  initialState: {
    data: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default popularSlice.reducer;
