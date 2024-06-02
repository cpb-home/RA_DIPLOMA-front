import { configureStore } from "@reduxjs/toolkit";
import catalog from "../slices/catalogSlice";

export const store = configureStore({
  reducer: {
    catList: catalog
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
