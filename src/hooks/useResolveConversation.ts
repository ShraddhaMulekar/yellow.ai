import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resolveConversation } from "../api/conversationApi";

export const useResolveConversation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resolveConversation,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["conversations"],
      });
    },
  });
};