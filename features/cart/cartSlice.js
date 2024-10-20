import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        const serializedAmount = localStorage.getItem("amount");
        if (serializedCart === null || serializedAmount === null) {
            return { cart: [], amount: 0 };  // If nothing is stored
        }
        return {
            cart: JSON.parse(serializedCart),
            amount: JSON.parse(serializedAmount)
        };
    } catch (e) {
        console.error("Could not load cart from localStorage", e);
        return { cart: [], amount: 0 };
    }
};


const saveCartToLocalStorage = (cart, amount) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("amount", JSON.stringify(amount));
    } catch (e) {
        console.error("Could not save cart to localStorage", e);
    }
};

const initialState = loadCartFromLocalStorage(); 

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find((item) => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += product.quantity;
                toast.success('Product quantity upgraded')
            } else {
                state.cart.push({ ...product, quantity: product.quantity });
                toast.success('Product added to the cart successfully')
            }

            state.amount += product.quantity;
            saveCartToLocalStorage(state.cart, state.amount);
        },
        removeItemFromCart: (state, action) => {
            const product = action.payload
            const newCart = state.cart.filter((item) => item.id !== product.id)
            state.cart = newCart
            state.amount = state.amount - product.quantity
            toast.error('Product removed successfully')
            saveCartToLocalStorage(state.cart, state.amount);
        }
    },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
