import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h5 className="site_name">Кинопоиск</h5>
    <App />
  </React.StrictMode>
);
