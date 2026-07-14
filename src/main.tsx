import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";

async function enableMocking() {
  if (import.meta.env.DEV) {
    await worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <App />
  );
});