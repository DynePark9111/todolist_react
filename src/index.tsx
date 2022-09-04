import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import { ThemeContextProvider } from "./Contexts/themeContext";
import { TodolistContextProvider } from "./Contexts/todolistContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TodolistContextProvider>
        <App />
      </TodolistContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
