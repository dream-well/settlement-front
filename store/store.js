import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from './slices/menuSlice';
import { popupSlice } from "./slices/popupSlice";  

export const store = configureStore({
    reducer: {
      [menuSlice.name]: menuSlice.reducer,
      [popupSlice.name]: popupSlice.reducer,
    },
    devTools: true,
  });
  