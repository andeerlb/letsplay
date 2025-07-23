import { configureStore } from '@reduxjs/toolkit';
import settingReducer from "@store/slices/settingSlice";
import userReducer from "@store/slices/userSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
