import React, { useState } from "react";
import Record from "./Record.js";
import "./Records.css";
import { useSelector } from "react-redux";
import {useTranslation} from 'react-i18next';

function Records() {
  const [t] = useTranslation('translations');
  const records = useSelector((store) => store.budget.records);
  return (
    <div className="records">
      <table>
        <tr className="table__row">
          <th>{t("Department")}</th>
          <th>{t("allocation")}</th>
          <th>{t("increase-by-10")}</th>
          <th>{t("decrease-by-10")}</th>
          <th>{t("delete")}</th>
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
