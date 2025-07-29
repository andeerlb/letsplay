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
      state.language = action.payload;
      return state;
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      state.layout = action.payload;
      return state;
    },
  },
});

export const { setLanguage, setLayout } = settingSlice.actions;
export default settingSlice.reducer;
