import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [
    {
      id: 0,
      department: "Human Resource",
      allocation: 100,
    },
    {
      id: 1,
      department: "Finance",
      allocation: 200,
    },
    {
      id: 2,
      department: "IT",
      allocation: 100,
    },
    {
      id: 3,
      department: "Marketing",
      allocation: 400,
    },
    {
      id: 4,
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
    decrementBudgetBy10: (state, action) => {
      const { allocation, id } = action.payload;
      state.records.map((record) => {
        if (record.id === id) {
          if (state.spent - 10 >= 0 && record.allocation - 10 >= 0) {
            record.allocation = allocation - 10;
            state.spent = state.spent - 10;
            state.remaining = state.remaining + 10;
          } else {
            alert("amount cannot be less than 0");
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
        if (action.payload.value <= 20000) {
          state.totalBudget = action.payload.value;
          state.remaining = state.totalBudget - state.spent;
        } else {
          alert("Budget amount cannot be more than 20000.");
        }
      } else {
        alert("Total budget cannot be less than total amount spent");
      }
    },

    budgetAllocation: (state, action) => {
      const { amount, departmentId } = action.payload;
      state.records.map((record) => {
        if (record.id === departmentId) {
          if (state.spent + amount <= state.totalBudget) {
            record.allocation += amount;
            state.spent += amount;
            state.remaining -= amount;
          } else {
            alert("Allocation cannot exceed from totalBudget");
          }
        }
      });
    },
  },
});

export default budgetSlice.reducer;
export const {
  incrementBudgetBy10,
  deleteRecord,
  updateTotalBudget,
  budgetAllocation,
  decrementBudgetBy10,
} = budgetSlice.actions;
