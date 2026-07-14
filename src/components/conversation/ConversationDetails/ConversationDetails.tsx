import type { Conversation } from "../../../types/conversation";
import ActionButtons from "../ActionButtons";

interface ConversationDetailsProps {
  conversation: Conversation | null;
}

const ConversationDetails = ({ conversation }: ConversationDetailsProps) => {
  if (!conversation) {
    return <h2>Select a conversation</h2>;
  }

  return (
    <div>
      <h2>{conversation.customerName}</h2>

      <p>Email: {conversation.customerEmail}</p>

      <p>Phone: {conversation.customerPhone}</p>

      <p>Subject: {conversation.subject}</p>

      <p>Summary: {conversation.summary}</p>

      <p>Last Message: {conversation.lastMessage}</p>

      <p>Priority: {conversation.priority}</p>

      <p>Status: {conversation.status}</p>

      <p>Channel: {conversation.channel}</p>

      <p>Assigned To: {conversation.assignedTo ?? "Unassigned"}</p>

      <p>AI Confidence: {conversation.aiConfidence}%</p>

      <p>Sentiment: {conversation.sentiment}</p>

      <ActionButtons
        id={conversation.id}
        assignedTo={conversation.assignedTo}
        status={conversation.status}
      />
    </div>
  );
};

export default ConversationDetails;
