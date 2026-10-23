// After `vite build`, render the app to HTML and put it inside dist/index.html,
// so the page shows content before any JavaScript runs.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const ssrEntry = resolve(root, "dist-ssr/entry-server.js");
const indexPath = resolve(root, "dist/index.html");

const { render } = await import(pathToFileURL(ssrEntry).href);
const html = readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("Could not find the root div in dist/index.html");

writeFileSync(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });
console.log("Prerendered dist/index.html");
