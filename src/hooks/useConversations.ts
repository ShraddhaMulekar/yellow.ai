import { useQuery } from "@tanstack/react-query";
import { getConversations } from "../api/conversationApi";

export const useConversations = () => {
  return useQuery({
    queryKey: ["conversations"],
    queryFn: getConversations,
  });
};