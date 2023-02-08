import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
