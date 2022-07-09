import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore from "./stores";
import { Provider } from "mobx-react";
import "./assets/css/base.css";

ReactDOM.render(
  <Provider {...new RootStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
