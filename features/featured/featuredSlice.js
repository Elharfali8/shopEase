import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const fetchFeatured = createAsyncThunk('featured/fetchFeatured', async () => {
    try {
        const response = await axios('https://fakestoreapi.com/products?limit=5')
        const data = response.data
        return data
    } catch (error) {
        throw new Error(error || 'there was an error')
    }
})

export const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatured.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFeatured.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchFeatured.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default featuredSlice.reducer