// Used only at build time to prerender the page to static HTML.
import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(<App />);
}
