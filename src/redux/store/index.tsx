import { configureStore } from "@reduxjs/toolkit";
import catalog from "../slices/catalogSlice";
import hits from "../slices/hitsSlice";
import basketItemsSlice from "../slices/basketItemsSlice";
import itemCardSlice from "../slices/itemCardSlice";

export const store = configureStore({
  reducer: {
    catList: catalog,
    hitsList: hits,
    basketItemsCount: basketItemsSlice,
    itemCard: itemCardSlice
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
