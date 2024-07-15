import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <App />
    </Router>
  </React.StrictMode>
);
