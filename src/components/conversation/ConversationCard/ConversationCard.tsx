import type { Conversation } from "../../../types/conversation";

interface ConversationCardProps {
  conversation: Conversation;
}

const ConversationCard = ({ conversation }: ConversationCardProps) => {
  return (
    <div>
      <h3>{conversation.customerName}</h3>

      <p>{conversation.subject}</p>

      <p>Priority: {conversation.priority}</p>

      <p>Status: {conversation.status}</p>

      <hr />
    </div>
  );
};

export default ConversationCard;
