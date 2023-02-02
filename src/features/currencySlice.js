import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [
    {
      id: 0,
      name: "Dollar",
      symbol: "$",
    },
    {
      id: 1,
      name: "Euro",
      symbol: "€",
    },
    {
      id: 2,
      name: "Pound",
      symbol: "£",
    },
    {
      id: 3,
      name: "Ruppee",
      symbol: "₹",
    },
  ],

  currentCurrency: "$",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,

  //actions
  reducers: {
    updateCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload.symbol;
    },
  },
});

export const { updateCurrentCurrency } = currencySlice.actions;
export default currencySlice.reducer;
