import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { render } from "react-dom";
import { Root } from "./components/Root";

render(
  <>
    <CssBaseline />
    <Root />
  </>,
  document.querySelector("#root")
);
