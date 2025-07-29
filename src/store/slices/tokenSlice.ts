import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Token } from '@tps/api';
import EncryptedStorage from 'react-native-encrypted-storage';

export const persistToken = createAsyncThunk(
  'token/persist',
  async (token: Token) => {
    await EncryptedStorage.setItem('access_token', JSON.stringify(token));
    return token;
  },
);

export const removeToken = createAsyncThunk(
  'token/remove',
  async () => {
    await EncryptedStorage.removeItem('access_token');
  },
);

const tokenSlice = createSlice({
  name: 'token',
  initialState: null as Token | null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(persistToken.fulfilled, (state, action) => action.payload)
      .addCase(removeToken.fulfilled, () => null);
  },
});

export default tokenSlice.reducer;
