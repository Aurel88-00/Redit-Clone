import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { subredditApi } from "./services/subredditApi";
import { postApi } from "./services/postApi";

export const store = configureStore({
  reducer: {
    [subredditApi.reducerPath]: subredditApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(subredditApi.middleware)
      .concat(postApi.middleware)
      
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
