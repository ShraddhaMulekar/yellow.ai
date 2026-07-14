import type { Conversation } from "../../../types/conversation";
import ConversationCard from "../ConversationCard";

interface ConversationListProps {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
}

const conversationList = ({ conversations, onSelect }: ConversationListProps) => {
  return (
    <div>
      {conversations.map((conversation) => (
        <ConversationCard 
            key={conversation.id} 
            conversation={conversation}
            onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default conversationList;