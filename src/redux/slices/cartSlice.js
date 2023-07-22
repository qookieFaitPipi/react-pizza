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
    deleteFromCart: (state, action) => {
      let index = state.cart.indexOf(action.payload.item);
      state.cart.splice(index, 1);
      state.totalPice -= action.payload.totalPice;
      state.countProducts -= 1;
    },
    deleteAllCart: (state, action) => {
      state.totalPice = 0;
      state.countProducts = 0;
      state.cart = []
    },
  },
})

export const { addToCart, deleteFromCart, deleteAllCart } = cartSlice.actions

export default cartSlice.reducer 