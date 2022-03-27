import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// run in development mode in isolation
if (process.env.NODE_ENV === "development") {
  const rootEl = document.querySelector("#dev-dashboard");

  if (rootEl) {
    mount(rootEl);
  } else {
    console.error("No root element is found");
  }
}

// run in the container
export { mount };
