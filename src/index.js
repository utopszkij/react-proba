import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App, { App2 } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
