import React from "react";
import Header from "./Header";
import Records from "./Records";
import Form from "./Form";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const records = useSelector((store) => store.budget.records);
  return (
    <div className="app">
      {console.log(records)}
      <Header />
      <Records />
      <Form records={records} />
    </div>
  );
}

export default App;
