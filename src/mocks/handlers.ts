import { http, HttpResponse, delay } from "msw";
import { conversations } from "./data";

export const handlers = [
  http.get("/conversations", async () => {
    await delay(500);

    return HttpResponse.json(conversations);
  }),
];