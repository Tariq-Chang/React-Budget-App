import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetAllocation } from "./features/budgetSlice";
import "./Form.css";
function Form({ records }) {
  const [departmentId, setDepartmentId] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(budgetAllocation({ departmentId, amount }));
  };
  return (
    <div className="form">
      <label>Department</label>
      <select class="options department__options">
        {records.map((record, id) => {
          return (
            <option
              className="option"
              value={departmentId}
              onClick={(e) => setDepartmentId(id)}
            >
              {record.department}
            </option>
          );
        })}
      </select>
      <label>Allocation</label>
      <select class="options allocation__options">
        <option class="option" value="add">
          Add
        </option>
      </select>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        onChange={(e) => {
          if (isNaN(amount)) {
            alert("Please input only numbers");
          } else {
            e.preventDefault();
            setAmount(parseFloat(e.target.value));
          }
        }}
      />
      <button type="submit" id="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}

export default Form;
