import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "../src/components/App";
import forecast from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={forecast.location} />
  </React.StrictMode>
);
