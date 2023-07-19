import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPice: 0,
  countProducts: 0,
  cart: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalPice += action.payload.totalPice;
      state.countProducts += 1;
      state.cart.push(action.payload.cart);
    },
    removeFromCart: (state, action) => {
      
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer 