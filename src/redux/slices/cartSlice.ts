import { createSlice } from '@reduxjs/toolkit';

// types
import { CartSliceState } from '../../@types/types';
import { CartProductItemType } from '../../@types/types';

const initialState: CartSliceState = {
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
      state.cart = state.cart.filter((number: CartProductItemType) => number.id !== action.payload.id);
      state.totalPice -= action.payload.price;
      state.countProducts -= 1;
    },
    deleteAllCart: (state) => {
      state.cart = initialState.cart;
      state.totalPice = initialState.totalPice;
      state.countProducts = initialState.countProducts;
    },
  },
})

export const { addToCart, deleteFromCart, deleteAllCart } = cartSlice.actions

export default cartSlice.reducer 