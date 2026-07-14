import type { Conversation } from "../../../types/conversation";
import ConversationCard from "../ConversationCard";

interface ConversationListProps {
  conversations: Conversation[];
}

const conversationList = ({ conversations }: ConversationListProps) => {
  return (
    <div>
      {conversations.map((conversation) => (
        <ConversationCard 
            key={conversation.id} 
            conversation={conversation}
        />
      ))}
    </div>
  );
};

export default conversationList;