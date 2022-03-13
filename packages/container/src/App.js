import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MarketingApp } from "./components/marketing-app";
import { Header } from "./components/header";

export const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <MarketingApp />
    </div>
  </BrowserRouter>
);
