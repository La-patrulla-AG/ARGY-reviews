import App from "./components/App";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../static/css/index.css";

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
