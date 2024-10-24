import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: 'all',
    search: '',
    sort: 'a-z',
    price: '-',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        resetFilters: () => initialState,
    },
});

export const { setCategory, setSearch, setSort, setPrice, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
