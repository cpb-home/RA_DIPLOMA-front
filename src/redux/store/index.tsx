import { configureStore } from "@reduxjs/toolkit";
import catalog from "../slices/catalogSlice";
import hits from "../slices/hitsSlice";
import basketItemsSlice from "../slices/basketItemsSlice";
import itemCardSlice from "../slices/itemCardSlice";
import catalogCategoriesSlice from "../slices/catalogCategoriesSlice";
import searchSlice from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    catList: catalog,
    hitsList: hits,
    basketItems: basketItemsSlice,
    itemCard: itemCardSlice,
    catalogCategories: catalogCategoriesSlice,
    searchText: searchSlice
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
