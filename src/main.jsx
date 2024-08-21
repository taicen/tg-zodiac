import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./components/LangProvider/LangProvider";
import { SWRConfig } from "swr";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig>
      <LangProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LangProvider>
    </SWRConfig>
  </StrictMode>
);
