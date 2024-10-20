import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    cart: [],
    amount: 0,  
    error: null
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find((item) => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.cart.push({ ...product, quantity: product.quantity });
            }

            state.amount += product.quantity;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
