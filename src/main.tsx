import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
// Google Fonts, self-hosted via Fontsource so they don't block first paint.
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/geist";
import "./index.css";
import App from "./App";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production builds ship prerendered HTML, so hydrate it; dev starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
