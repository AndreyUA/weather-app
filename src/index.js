import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//redux
import { Provider } from "react-redux";
import configureStore from "./store/store";

const store = configureStore();
//redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
