import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../BaseUrl/config';
import axios from 'axios';


export const productSlice = createSlice({
  name: 'all_products',
  initialState: {
    data: [],
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    })
   .addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = 'Unable to get data';
    })
  },
});

export default productSlice.reducer;



export const getProducts = createAsyncThunk(
  'get/products',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/all-products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);