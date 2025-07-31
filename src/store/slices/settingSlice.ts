import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      if (!action.payload) return;
      state.layout = action.payload;
    },
  },
});

export const { setLanguage, setLayout } = settingSlice.actions;
export default settingSlice.reducer;
