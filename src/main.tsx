import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ShoppingcartProvider } from "./shared/Context/UserContext.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShoppingcartProvider>
        <App />
      </ShoppingcartProvider>
    </BrowserRouter>
  </StrictMode>
);
