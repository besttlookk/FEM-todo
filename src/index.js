import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./contexts/appContext";
import ThemeProvider from "./contexts/themeContext";
import "./styles/index.css";

ReactDOM.render(
  <AppProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);
