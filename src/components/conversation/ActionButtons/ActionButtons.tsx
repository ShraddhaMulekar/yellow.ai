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
      <button className="btn btn-resolved" disabled>
        ✓ Resolved
      </button>
    );
  }

  // Not assigned yet
  if (assignedTo === null) {
    return (
      <button
        className="btn btn-assign"
        onClick={() => assignMutate(id)}
        disabled={isAssigning}
      >
        👤 {isAssigning ? "Assigning..." : "Assign to Me"}
      </button>
    );
  }

  // Assigned but not resolved
  return (
    <button
      className="btn btn-resolve"
      onClick={() => resolveMutate(id)}
      disabled={isResolving}
    >
      ✓ {isResolving ? "Resolving..." : "Mark as Resolved"}
    </button>
  );
}

export default ActionButtons;