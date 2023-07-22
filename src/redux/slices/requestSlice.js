import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}
export const requestSlice = createSlice({
  name: 'request',
  initialState: initialState,
  reducers: { 
    
  },
})

export const { setItems } = requestSlice.actions

export default requestSlice.reducer 