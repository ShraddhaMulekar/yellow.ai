import { useAssignConversation } from "../../../hooks/useAssignConversation";
import { useResolveConversation } from "../../../hooks/useResolveConversation";

interface ActionButtonsProps {
  id: string;
  assignedTo: string | null;
  status: "Open" | "Assigned" | "Resolved";
}

function ActionButtons({
  id,
  assignedTo,
  status,
}: ActionButtonsProps) {
  const {
    mutate: assignMutate,
    isPending: isAssigning,
  } = useAssignConversation();

  const {
    mutate: resolveMutate,
    isPending: isResolving,
  } = useResolveConversation();

  // Already resolved
  if (status === "Resolved") {
    return (
      <button disabled>
        Resolved
      </button>
    );
  }

  // Not assigned yet
  if (assignedTo === null) {
    return (
      <button
        onClick={() => assignMutate(id)}
        disabled={isAssigning}
      >
        {isAssigning ? "Assigning..." : "Assign"}
      </button>
    );
  }

  // Assigned but not resolved
  return (
    <button
      onClick={() => resolveMutate(id)}
      disabled={isResolving}
    >
      {isResolving ? "Resolving..." : "Resolve"}
    </button>
  );
}

export default ActionButtons;