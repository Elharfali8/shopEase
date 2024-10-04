import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";
import categoriesReducer from "./features/categories/categoriesSlice";

const store = configureStore({
    reducer: {
        featured: featuredReducer,
        categories: categoriesReducer
    }
})

export default store