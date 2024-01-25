// function NavigationBar() {
//   // TODO: Actually implement a navigation bar
//   return <h2>I am frontend developer</h2>;
// }

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationBar />);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);