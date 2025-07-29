import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Token } from '@tps/api';
import EncryptedStorage from 'react-native-encrypted-storage';

export const persistToken = createAsyncThunk(
  'token/persist',
  async (token: Token) => {
    await EncryptedStorage.setItem('access_token', JSON.stringify(token));
    return token;
  }
);

export const removeToken = createAsyncThunk(
  'token/remove',
  async () => {
    await EncryptedStorage.removeItem('access_token');
    return null; // importante retornar algo para o fulfilled
  }
);

export const getToken = createAsyncThunk(
  'token/get',
  async () => {
    const token = await EncryptedStorage.getItem('access_token');
    return token && token.length > 0 ? JSON.parse(token) : null;
  }
);

const tokenSlice = createSlice({
  name: 'token',
  initialState: null as Token | null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(persistToken.fulfilled, (_, action) => action.payload)
      .addCase(getToken.fulfilled, (_, action) => action.payload)
      .addCase(removeToken.fulfilled, () => null);
  },
});

export default tokenSlice.reducer;
