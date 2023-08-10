import { createSlice } from '@reduxjs/toolkit';

// types
import { UserSliceState } from '../../@types/types';

const initialState: UserSliceState = {
  userLogin: undefined,
  isEntered: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: { 
    
  },
})

export const {  } = userSlice.actions

export default userSlice.reducer 