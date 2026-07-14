import type { Conversation } from "../../../types/conversation";

interface ConversationCardProps {
  conversation: Conversation;
  onSelect: (conversation: Conversation) => void;
}

const ConversationCard = ({ conversation, onSelect }: ConversationCardProps) => {
  return (
    <div onClick={() => onSelect(conversation)}>
      <h3>{conversation.customerName}</h3>

      <p>{conversation.subject}</p>

      <p>Priority: {conversation.priority}</p>

      <p>Status: {conversation.status}</p>

      <hr />
    </div>
  );
};

export default ConversationCard;
