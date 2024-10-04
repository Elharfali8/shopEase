import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";

const store = configureStore({
    reducer: {
        featured: featuredReducer
    }
})

export default store