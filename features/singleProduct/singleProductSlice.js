import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const fetchSingleProduct = createAsyncThunk('singleProduct/fetchSingleProduct', async ({id}) => {
    try {
        const response = await axios(`https://fakestoreapi.com/products/${id}`)
        const data = response.data
        return data
    } catch (error) {
        throw new Error(error || 'there was an error')
    }
})

export const SingleProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default SingleProductsSlice.reducer