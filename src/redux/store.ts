import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// slices
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterSlice,
    cartSlice: cartSlice,
    productSlice: productSlice,
    userSlice: userSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();