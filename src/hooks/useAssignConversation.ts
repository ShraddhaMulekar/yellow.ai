import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignConversation } from "../api/conversationApi";

export const useAssignConversation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: assignConversation,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["conversations"] });
        }
    })

}