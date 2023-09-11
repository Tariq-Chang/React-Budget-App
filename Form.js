import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetAllocation } from "./features/budgetSlice";
import {useTranslation} from 'react-i18next'
import "./Form.css";
function Form({ records }) {
  const [t] = useTranslation("translations");
  const [departmentId, setDepartmentId] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(budgetAllocation({ departmentId, amount }));
  };
  return (
    <div className="form">
      <label>{t("department")}</label>
      <select className="options department__options">
        {records.map((record, id) => {
          return (
            <option
              className="option"
              value={departmentId}
              onClick={(e) => setDepartmentId(id)}
            >
              {t(record.department)}
            </option>
          );
        })}
      </select>
      <label>{t("allocation")}</label>
      <select className="options allocation__options">
        <option className="option" value="add">
          Add
        </option>
      </select>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          if (isNaN(e.target.value) ) {
            alert("Please input only numbers");
          } else {
            e.preventDefault();
            setAmount(parseFloat(e.target.value));
          }
        }}
      />
      <button type="submit" id="submit" onClick={handleSubmit}>
        {t("submit")}
      </button>
    </div>
  );
}

export default Form;
