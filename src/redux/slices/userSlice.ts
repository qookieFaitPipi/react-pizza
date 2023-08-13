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
    login: (state, action) => {
      state.userLogin = action.payload;
      state.isEntered = true;
    }
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer 