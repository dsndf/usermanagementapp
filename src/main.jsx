import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApiContext from "./context/ApiContext.jsx";

createRoot(document.getElementById("root")).render(
  <ApiContext>
    <App />
  </ApiContext>
);
