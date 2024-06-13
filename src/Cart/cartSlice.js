// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isOpen: false,
        items: [],
    },
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { toggleCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
