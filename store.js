import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import  productsReducer  from "./features/products/productsSlice";

const store = configureStore({
    reducer: {
        featured: featuredReducer,
        categories: categoriesReducer,
        products: productsReducer
    }
})

export default store