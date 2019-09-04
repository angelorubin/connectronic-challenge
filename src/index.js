import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { Provider } from "react-redux";
import { store } from "./store";

render(
  <Provider store={store}>
    <CssBaseline />
    <Root />
  </Provider>,
  document.querySelector("#root")
);
