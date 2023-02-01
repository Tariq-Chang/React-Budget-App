import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "../features/budgetSlice";
const store = configureStore({
  reducer: {
    budget: budgetSlice,
  },
});

export default store;
