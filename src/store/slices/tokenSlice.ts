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
    return null;
  }
);

export const getToken = createAsyncThunk<Token | null>(
  'token/get',
  async (_, thunkAPI) => {
    const token = await EncryptedStorage.getItem('access_token');

    if (!token || token.length === 0) {
      return null;
    }

    try {
      const parsed: Token = JSON.parse(token);

      const nowInSeconds = Math.floor(Date.now() / 1000);
      if (parsed.expires_at <= nowInSeconds) {
        thunkAPI.dispatch(removeToken());
        return null;
      }

      return parsed;
    } catch (e) {
      thunkAPI.dispatch(removeToken());
      return null;
    }
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
