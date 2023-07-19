import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortType: 0,
  categoryType: 0,
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload.sortType
    },    
    setCategoryType: (state, action) => {
      state.categoryType = action.payload.categoryType
    },
  },
})

export const { setSortType, setCategoryType } = filterSlice.actions

export default filterSlice.reducer 