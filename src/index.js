import "react-app-polyfill/ie11";
import "babel-polyfill";
import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./modules/App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
