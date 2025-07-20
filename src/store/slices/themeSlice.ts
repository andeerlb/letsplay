import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Layouts = 'light' | 'dark' | 'system';

type ThemeState = {
  preference: Layouts;
};

const initialState: ThemeState = {
  preference: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPreference: (state, action: PayloadAction<Layouts>) => {
      state.preference = action.payload;
    },
  },
});

export const { setPreference } = themeSlice.actions;
export default themeSlice.reducer;
