import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18n"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
