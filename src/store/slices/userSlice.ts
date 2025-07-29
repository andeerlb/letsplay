import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@tps/api';

const initialState: User = {
  givenName: '',
  surname: '',
  nickname: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
