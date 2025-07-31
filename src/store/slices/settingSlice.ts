import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsStorage } from '@storage/storage';
import type { Settings } from '@tps/api';
import type { Language, Layout } from '@tps/theme';

const initialState: Settings = {
  language: 'pt',
  layout: 'system',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      if (!action.payload) return;
      state.language = action.payload;
      settingsStorage.set(state);
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      if (!action.payload) return;
      state.layout = action.payload;
      settingsStorage.set(state);
    },
    setSettings: (state, action: PayloadAction<Settings>) => {
      if (!action.payload) return;
      state = action.payload;
      settingsStorage.set(state);
    },
  },
});

export const { setLanguage, setLayout } = settingSlice.actions;
export default settingSlice.reducer;
