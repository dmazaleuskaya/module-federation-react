import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

// mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// run in development mode in isolation
if (process.env.NODE_ENV === "development") {
  const rootEl = document.querySelector("#dev-marketing");

  if (rootEl) {
    mount(rootEl);
  } else {
    console.error("No root element is found");
  }
}

// run in the container
export { mount };
