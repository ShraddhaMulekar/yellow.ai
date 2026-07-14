import EmptyState from "../../../common/EmptyState";
import type { Conversation } from "../../../types/conversation";
import ConversationCard from "../ConversationCard";

interface ConversationListProps {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
  selectedId?: string | null;
}

const conversationList = ({ conversations, onSelect, selectedId }: ConversationListProps) => {
  if (conversations.length === 0) {
    return (
      <div className="empty-state-wrapper">
        <EmptyState
          title="No conversations found"
          description="Try changing your search or filters."
        />
      </div>
    );
  }

  return (
    <div className="conversation-list">
      {conversations.map((conversation) => (
        <ConversationCard 
            key={conversation.id} 
            conversation={conversation}
            onSelect={onSelect}
            isSelected={conversation.id === selectedId}
        />
      ))}
    </div>
  );
};

export default conversationList;