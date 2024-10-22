import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        const serializedAmount = localStorage.getItem("amount");
        const serializedTotal = localStorage.getItem("total");
        const serializedOrderTotal = localStorage.getItem("orderTotal");
        const serializedTax = localStorage.getItem("tax");
        const serializedShipping = localStorage.getItem("shipping");

        if (
            serializedCart === null ||
            serializedAmount === null ||
            serializedTotal === null ||
            serializedOrderTotal === null ||
            serializedTax === null ||
            serializedShipping === null
        ) {
            return { cart: [], amount: 0, total: 0, orderTotal: 0, tax: 5.00, shipping: 5.00 };
        }

        return {
            cart: JSON.parse(serializedCart),
            amount: JSON.parse(serializedAmount),
            total: JSON.parse(serializedTotal),
            orderTotal: JSON.parse(serializedOrderTotal),
            tax: JSON.parse(serializedTax),
            shipping: JSON.parse(serializedShipping)
        };
    } catch (e) {
        console.error("Could not load cart from localStorage", e);
        return { cart: [], amount: 0, total: 0, orderTotal: 0, tax: 5.00, shipping: 5.00 };
    }
};



const saveCartToLocalStorage = (cart, amount, total, orderTotal, tax, shipping) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("amount", JSON.stringify(amount));
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("orderTotal", JSON.stringify(orderTotal))
        localStorage.setItem("tax", JSON.stringify(tax))
        localStorage.setItem("shipping", JSON.stringify(shipping))
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
                state.total += product.price * product.quantity;
                toast.success('Product quantity upgraded');
            } else {
                state.cart.push({ ...product, quantity: product.quantity });
                state.total += product.price * product.quantity;
                toast.success('Product added to the cart successfully');
            }
        
            state.amount += product.quantity;
            saveCartToLocalStorage(state.cart, state.amount, state.total, state.orderTotal, state.tax, state.shipping);
        },
        removeItemFromCart: (state, action) => {
            const product = action.payload;
            const newCart = state.cart.filter((item) => item.id !== product.id);
            state.cart = newCart;
            state.amount -= product.quantity;
            state.total -= product.price * product.quantity;
            toast.error('Product removed successfully');
            saveCartToLocalStorage(state.cart, state.amount, state.total, state.orderTotal, state.tax, state.shipping);
        },        
        calcTotal: (state) => {
            if (state.amount < 5) {
                state.tax = 15.00;
            } else if (state.amount > 5) {
                state.tax = 20.00;
            } else {
                state.tax = 30.00;
            }
            
            state.orderTotal = state.total + state.shipping + state.tax;
            saveCartToLocalStorage(state.cart, state.amount, state.total, state.orderTotal, state.tax, state.shipping);
        },
        updateQuantity: (state, action) => {
            const { id, newQuantity } = action.payload;
            const product = state.cart.find((item) => item.id === id);

            if (product) {
                const quantityDifference = newQuantity - product.quantity;
                product.quantity = newQuantity;
                state.amount += quantityDifference;
                state.total += product.price * quantityDifference;
            }

            saveCartToLocalStorage(state.cart, state.amount, state.total, state.orderTotal, state.tax, state.shipping);
        },
    },
});

export const { addToCart, removeItemFromCart, calcTotal, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
