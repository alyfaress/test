import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({//exporting the reducer
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {{/*addItem is the name of the action.
      It is a function that receives two arguments:
      state: Represents the current state of this slice.
      action: Contains information about the dispatched action, including any payload (data sent with the action). */}
      const { name, image, cost } = action.payload;{/*Destructure Payload:
                                                    The action.payload object is destructured into variables name, image, and cost.
                                                    This assumes the action's payload contains these properties, representing the product details being added to the cart */}
      const existingItem = state.items.find((item) => item.name === name);//.name from the state(in the store)
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
   state.items = state.items.filter((item) => item.name !== action.payload);
   },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;////////imp,exporting functions

export default CartSlice.reducer;
