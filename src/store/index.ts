import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "@store/slices/settingSlice";
import userReducer from "@store/slices/userSlice";
import tokenReducer from './slices/tokenSlice';

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    user: userReducer,
    token: tokenReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
