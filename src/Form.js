import React from "react";
import "./Form.css";
function Form() {
  return (
    <div className="form">
      <label>Department</label>
      <select class="options department__options">
        <option class="option" value="choose" disabled>
          Choose..
        </option>
        <option class="option" value="marketing">
          Marketing
        </option>
        <option class="option" value="finance">
          Finance
        </option>
        <option class="option" value="sales">
          Sales
        </option>
        <option class="option" value="human resource">
          Human Resource
        </option>
      </select>
      <label>Allocation</label>
      <select class="options allocation__options">
        <option class="option" value="add">
          Add
        </option>
        <option class="option" value="remove">
          Remove
        </option>
      </select>
      <input type="number" name="amount" id="amount" />
      <button type="submit" id="submit">
        submit
      </button>
    </div>
  );
}

export default Form;
