import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: [],
    error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios('https://fakestoreapi.com/products')
        const data = response.data
        return data
    } catch (error) {
        throw new Error(error || 'there was an error')
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default productsSlice.reducer