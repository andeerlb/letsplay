import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Language, Layout } from '@types/theme';

export type SettingState = {
  layout: Layout;
  language: Language | null;
};

const initialState: SettingState = {
  language: null,
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
