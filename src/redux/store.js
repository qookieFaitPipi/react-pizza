import { configureStore } from '@reduxjs/toolkit';

// slices
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import requestSlice from './slices/requestSlice';
import selectSlice from './slices/selectSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterSlice,
    cartSlice: cartSlice,
    requestSlice: requestSlice,
    selectSlice: selectSlice,
  },
})