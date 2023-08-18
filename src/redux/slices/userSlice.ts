import { createSlice } from '@reduxjs/toolkit';

// types
import { UserSliceState } from '../../@types/types';

const initialState: UserSliceState = {
  userId: undefined,
  userLogin: undefined,
  userName: undefined,
  userTel: undefined,
  userEmail: undefined,
  isEntered: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: { 
    login: (state, action) => {
      state.userId = action.payload.userId
      state.userLogin = action.payload.userLogin;
      state.isEntered = true;
    },
    setSettings: (state, action) => {
      state.userName = action.payload.userName;
      state.userTel = action.payload.userTel;
      state.userEmail = action.payload.userEmail;
    }
  },
})

export const { login, setSettings } = userSlice.actions

export default userSlice.reducer 