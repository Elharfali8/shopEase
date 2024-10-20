import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import productsReducer from "./features/products/productsSlice";
import SingleProductsReducer from "./features/singleProduct/singleProductSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        featured: featuredReducer,
        categories: categoriesReducer,
        products: productsReducer,
        singleProduct: SingleProductsReducer,
        cart: cartReducer
    }
})

export default store