import { configureStore } from "@reduxjs/toolkit";
import catalog from "../slices/catalogSlice";
import hits from "../slices/hitsSlice";

export const store = configureStore({
  reducer: {
    catList: catalog,
    hitsList: hits
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
