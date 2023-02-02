import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "../features/budgetSlice";
import currencySlice from "../features/currencySlice";
const store = configureStore({
  reducer: {
    budget: budgetSlice,
    currency: currencySlice,
  },
});

export default store;
