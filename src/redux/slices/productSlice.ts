import { createSlice } from '@reduxjs/toolkit';

// types
import { ProductSliceState } from '../../@types/types';

const initialState: ProductSliceState = {
  productList: [],
  pickProduct: undefined
}
export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: { 
    setProductsState: (state, action) => {
      state.productList = action.payload;
    },
    pickProduct: (state, action) => {
      state.pickProduct = action.payload;
    },
  },
})

export const { setProductsState, pickProduct } = productSlice.actions

export default productSlice.reducer 