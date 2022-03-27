import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import { App } from "./app";

// mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname != nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// run in development mode in isolation
if (process.env.NODE_ENV === "development") {
  const rootEl = document.querySelector("#dev-auth");

  if (rootEl) {
    mount(rootEl, { defaultHistory: createBrowserHistory() });
  } else {
    console.error("No root element is found");
  }
}

// run in the container
export { mount };
