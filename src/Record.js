import React from "react";
import { useDispatch } from "react-redux";
import { deleteRecord, incrementBudgetBy10 } from "./features/budgetSlice";
import "./Record.css";
function Record({ department, allocation, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("delete clicked");
    dispatch(deleteRecord({ id, allocation }));
  };
  return (
    <div className="record">
      <table>
        <tr className="table__row">
          <td>{department}</td>
          <td>
            $ <span>{allocation}</span>
          </td>
          <td>
            <input
              type="button"
              value="+"
              className="add__button"
              onClick={() => dispatch(incrementBudgetBy10({ id, allocation }))}
            />
          </td>
          <td>
            <input
              type="button"
              value="x"
              className="delete__button"
              onClick={handleDelete}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Record;
