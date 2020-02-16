import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import App from "./App";
import todoApp from "./reducers";

const store = createStore(todoApp);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
