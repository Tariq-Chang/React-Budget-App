import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [
    {
      id: 1,
      department: "Human Resource",
      allocation: 100,
    },
    {
      id: 2,
      department: "Finance",
      allocation: 200,
    },
    {
      id: 3,
      department: "IT",
      allocation: 100,
    },
    {
      id: 4,
      department: "Marketing",
      allocation: 400,
    },
    {
      id: 5,
      department: "Designer",
      allocation: 50,
    },
  ],
  totalBudget: 1000,
  spent: 850,
  remaining: 150,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,

  reducers: {
    incrementBudgetBy10: (state, action) => {
      const { allocation, id } = action.payload;
      // let sum = 0;
      // const totalSum = state.records.map((record) => {
      //   return (sum += record.allocation);
      // });
      state.records.map((record) => {
        if (record.id === id) {
          if (state.spent + 10 <= state.totalBudget) {
            record.allocation = allocation + 10;
            state.spent = state.spent + 10;
            state.remaining = state.remaining - 10;
          } else {
            alert("Spent amount cannot be greater than totalBudget");
          }
        }
      });
    },
    deleteRecord: (state, action) => {
      state.records.map((record) => {
        if (record.id === action.payload.id) {
          state.spent -= action.payload.allocation;
          state.remaining = state.totalBudget - state.spent;
        }
      });
      state.records = state.records.filter(
        (record) => record.id !== action.payload.id
      );
    },

    updateTotalBudget: (state, action) => {
      if (state.spent <= action.payload.value) {
        state.totalBudget = action.payload.value;
        state.remaining = state.totalBudget - state.spent;
      } else {
        alert("Total budget cannot be less than total amount spent");
      }
    },
  },
});

export default budgetSlice.reducer;
export const { incrementBudgetBy10, deleteRecord, updateTotalBudget } =
  budgetSlice.actions;
