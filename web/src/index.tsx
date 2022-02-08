import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import Home from "./pages/home";
import Index from "./pages";
import Login from "./pages/login";

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
