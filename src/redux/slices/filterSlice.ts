import { createSlice } from '@reduxjs/toolkit';

// types
import { FilterSliceState } from '../../@types/types';

const initialState: FilterSliceState = {
  sortType: 0,
  categoryType: 0,
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },    
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
  },
})

export const { setSortType, setCategoryType } = filterSlice.actions

export default filterSlice.reducer 