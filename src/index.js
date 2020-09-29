import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <App />
      <App />
    </React.StrictMode>,
    rootElement
  );
}

setInterval(tick, 1000);
