import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Language = 'pt' | 'en';

export type LanguageState = {
  locale: Language;
};

const DEFAULT_LANGUAGE: Language = 'pt';

const initialState: LanguageState = {
  locale: DEFAULT_LANGUAGE,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Language>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = languageSlice.actions;
export default languageSlice.reducer;
