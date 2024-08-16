import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart(state, action) {
      state.push(action.payload); // Update the state
      localStorage.setItem('cart', JSON.stringify(state)); // Sync with localStorage
    },

    // Delete item from cart by index
    deleteFromCart(state, action) {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1); // Remove item at the specified index
        localStorage.setItem('cart', JSON.stringify(state)); // Sync the updated state with localStorage
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
