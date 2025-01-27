import App from "./components/App";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../static/css/index.css";

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);

;(function () {
  const originalSetItem = localStorage.setItem
  const originalRemoveItem = localStorage.removeItem

  // Custom event for local storage changes
  const localStorageChangeEvent = new Event("localStorageChange")

  // Override setItem
  localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value])
      window.dispatchEvent(localStorageChangeEvent)
  }

  // Override removeItem
  localStorage.removeItem = function (key) {
      originalRemoveItem.apply(this, [key])
      window.dispatchEvent(localStorageChangeEvent)
  }
})()

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
