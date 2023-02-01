import React, { useState } from "react";
import Record from "./Record.js";
import "./Records.css";
import { useSelector } from "react-redux";
function Records() {
  const records = useSelector((store) => store.budget.records);
  return (
    <div className="records">
      <table>
        <tr class="table__row">
          <th>Department</th>
          <th>Allocation</th>
          <th>Increase By 10</th>
          <th>Delete</th>
        </tr>
        <div className="records__main">
          {records.map((record) => {
            const { department, id, allocation } = record;
            return (
              <Record
                department={department}
                allocation={allocation}
                key={id}
                id={id}
              />
            );
          })}
        </div>
      </table>
    </div>
  );
}

export default Records;
