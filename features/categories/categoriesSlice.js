import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    try {
        const response = await axios('https://fakestoreapi.com/products/categories')
        const data = response.data
        return data
    } catch (error) {
        throw new Error(error || 'there was an error')
    }
})

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default categoriesSlice.reducer