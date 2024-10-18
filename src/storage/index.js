import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
    userReducer: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});