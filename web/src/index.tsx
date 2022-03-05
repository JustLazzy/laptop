import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import Home from "./pages/home";
ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <Router basename="/">
        <Home />
      </Router>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
