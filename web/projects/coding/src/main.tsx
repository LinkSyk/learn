import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Project03 from "./Project03.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Project03 />
  </StrictMode>,
);
