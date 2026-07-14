import type { Conversation } from "../types/conversation";

export const getConversations = async (): Promise<Conversation[]> => {
  const response = await fetch("/conversations");
  console.log({response})

  if (!response.ok) {
    throw new Error("Failed to fetch conversations");
  }

  return response.json();
};