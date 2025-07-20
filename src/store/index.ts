import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@store/slices/themeSlice';
import languageReducer from "@store/slices/languageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
