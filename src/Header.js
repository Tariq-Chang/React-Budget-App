import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalBudget } from "./features/budgetSlice";

function Header() {
  const dispatch = useDispatch();
  const totalBudget = useSelector((store) => store.budget.totalBudget);
  const spent = useSelector((store) => store.budget.spent);
  const remainnig = useSelector((store) => store.budget.remaining);

  const handleChange = (e) => {
    e.preventDefault();

    dispatch(updateTotalBudget({ value: e.target.value }));
  };
  return (
    <div className="header">
      <p class="header__budget">
        Budget: $
        <span id="budget">
          <input
            type="number"
            name="totalBudget"
            value={totalBudget}
            onChange={handleChange}
          />
        </span>
      </p>
      <p class="header__spent">
        Spent: $<span id="spent">{spent}</span>
      </p>
      <p class="header__remaining">
        Remaining: $<span id="remaining">{remainnig}</span>
      </p>
    </div>
  );
}

export default Header;
