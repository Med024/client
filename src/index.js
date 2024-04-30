import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from  "react-alert-template-basic";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

const options = {
  timeout: 5000,
  template:AlertTemplate,
  positions: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
axios.defaults.baseURL = '';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </AlertProvider>

  </Provider>
);

reportWebVitals();
