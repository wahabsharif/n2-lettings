import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

export type AppDispatch = typeof store.dispatch;
