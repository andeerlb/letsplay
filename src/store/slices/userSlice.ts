import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  givenName: string;
  surname: string;
  nickname: string;
  email: string
}

const initialState: UserState = {
  givenName: '',
  surname: '',
  nickname: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
