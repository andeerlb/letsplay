import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "@store/slices/settingSlice";
import tokenReducer from '@store/slices/tokenSlice';
import userReducer from "@store/slices/userSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    user: userReducer,
    token: tokenReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
