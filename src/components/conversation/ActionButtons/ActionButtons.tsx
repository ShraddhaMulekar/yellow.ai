import { useAssignConversation } from "../../../hooks/useAssignConversation";

interface ActionButtonsProps {
  id: string;
  assignedTo: string | null;
}

function ActionButtons({
  id,
  assignedTo,
}: ActionButtonsProps) {
  const { mutate, isPending } = useAssignConversation();

  const handleAssign = () => {
    mutate(id);
  };

  return (
    <div>
      <button
        onClick={handleAssign}
        disabled={assignedTo !== null || isPending}
      >
        {isPending ? "Assigning..." : "Assign"}
      </button>
    </div>
  );
}

export default ActionButtons;