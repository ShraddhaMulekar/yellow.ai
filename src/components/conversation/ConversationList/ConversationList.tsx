import EmptyState from "../../../common/EmptyState";
import type { Conversation } from "../../../types/conversation";
import ConversationCard from "../ConversationCard";

interface ConversationListProps {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
}

const conversationList = ({ conversations, onSelect }: ConversationListProps) => {
  if (conversations.length === 0) {
    return (
      <EmptyState
        title="No conversations found"
        description="Try changing your search or filters."
      />
    );
  }

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