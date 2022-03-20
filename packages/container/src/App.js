import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { MarketingApp } from "./components/marketing-app";
import { Header } from "./components/header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </StylesProvider>
  </BrowserRouter>
);
