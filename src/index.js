// Libs
import React from "react";
import ReactDOM from "react-dom";

//Css
import "./index.css";

//Components
import App from "./App";
import AppProvider from "../src/contexts/AppContext/AppProvider";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
