import React from "react";
import Header from "./Header";
import Records from './Records';
import Form from './Form'
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header/>
      <Records/>
      <Form/>
    </div>
  );
}

export default App;
