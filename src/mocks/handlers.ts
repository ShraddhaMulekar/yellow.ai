import { http, delay, HttpResponse } from "msw";
import { conversations } from "./data";

export const handlers =[
    // GET all conversations
    http.get("/conversations", async () => {
        // Simulate network delay
        await delay(500);
        return HttpResponse.json(conversations, { status: 200 });
    })
]
