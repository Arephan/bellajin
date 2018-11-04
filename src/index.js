import "assets/scss/material-kit-react.css?v=1.2.0";
import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { UserProvider } from "contexts/UserContext.jsx";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
