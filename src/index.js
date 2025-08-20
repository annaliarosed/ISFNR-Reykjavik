import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
const basePath = "/we-meet-across-the-world/reykjavik-iceland";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={basePath} future={{ v7_startTransition: true }}>
      <App />
    </Router>
  </React.StrictMode>
);
