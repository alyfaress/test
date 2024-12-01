import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({//exporting the reducer
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;////////imp,exporting functions

export default CartSlice.reducer;
