import { configureStore } from "@reduxjs/toolkit";
import { maintenanceSlice } from "./slices/maintenanceSlice";
import { menuSlice } from './slices/menuSlice';
import { popupSlice } from "./slices/popupSlice";  

export const store = configureStore({
    reducer: {
      [menuSlice.name]: menuSlice.reducer,
      [popupSlice.name]: popupSlice.reducer,
      [maintenanceSlice.name]: maintenanceSlice.reducer,
    },
    devTools: true,
  });
  