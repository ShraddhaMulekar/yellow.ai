import { http, HttpResponse, delay } from "msw";
import { conversations } from "./data";

export const handlers = [
  http.get("/conversations", async () => {
    await delay(500);

    return HttpResponse.json(conversations);
  }),
  
  http.patch("/conversations/:id/assign", async ({ params }) => {
    await delay(500);

    const { id } = params;

    const conversation = conversations.find((item) => item.id === id);

    if (!conversation) {
      return new HttpResponse(null, {
        status: 404,
      });
    }

    conversation.assignedTo = "John Doe";
    conversation.status = "Assigned";

    return HttpResponse.json(conversation);
  }),
];
