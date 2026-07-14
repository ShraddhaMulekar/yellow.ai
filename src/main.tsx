import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactQueryProvider from "./providers/ReactQueryProvider";

import { worker } from "./mocks/browser";

async function enableMocking() {
  if (import.meta.env.DEV) {
    await worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  );
});