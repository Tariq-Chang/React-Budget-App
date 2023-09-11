import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalBudget } from "./features/budgetSlice";
import { updateCurrentCurrency } from "./features/currencySlice";
import {useTranslation} from "react-i18next";

function Header() {
  const dispatch = useDispatch();
  const totalBudget = useSelector((store) => store.budget.totalBudget);
  const spent = useSelector((store) => store.budget.spent);
  const remainnig = useSelector((store) => store.budget.remaining);
  const currencies = useSelector((store) => store.currency.currencies);
  const [t, i18n]= useTranslation('translations');
  const currentCurrency = useSelector(
    (store) => store.currency.currentCurrency
  );

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(updateTotalBudget({ value: e.target.value }));
  };
  return (
    <div className="header">
     
      <p className="header__budget">
        {t('budget')}: {currentCurrency}
        <span id="budget">
          <input
            type="number"
            name="totalBudget"
            value={totalBudget}
            onChange={handleChange}
          />
          <button className="increment">+</button>
          <button className="decrement">-</button>
        </span>
      </p>
      <p className="header__spent">
        {t('spent')}: {currentCurrency}
        <span id="spent">{spent}</span>
      </p>
      <p className="header__remaining">
        {t("remaining")}: {currentCurrency}
        <span id="remaining">{remainnig}</span>
      </p>
      <select name="currency" className="currency">
        {currencies.map((currency, id) => {
          return (
            <option
              value={currency.symbol}
              key={id}
              onClick={() => {
                dispatch(updateCurrentCurrency({ symbol: currency.symbol }));
              }}
            >
              {currency.name}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)} style={{border:"1px solid black"}}>
        <option value="chose" selected disabled >Chose a language</option>
        <option value="en">English</option>
        <option value="ur">{t('urdu')}</option>
      </select>
    </div>
  );
}

export default Header;
