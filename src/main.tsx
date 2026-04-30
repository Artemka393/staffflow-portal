import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { GlobalStyle } from "./app/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

