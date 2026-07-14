import type { Conversation } from "../../../types/conversation";

interface ConversationCardProps {
  conversation: Conversation;
  onSelect: (conversation: Conversation) => void;
  isSelected?: boolean;
}

const ConversationCard = ({ conversation, onSelect, isSelected }: ConversationCardProps) => {
  const formatTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString([], { month: "short", day: "numeric" }) + " " + 
             date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return dateStr;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "WhatsApp":
        return "💬";
      case "Email":
        return "✉️";
      case "Chat":
        return "💻";
      default:
        return "📱";
    }
  };

  return (
    <div 
      className={`conversation-card ${isSelected ? "selected" : ""} ${conversation.unread ? "unread" : ""}`} 
      onClick={() => onSelect(conversation)}
    >
      <div className="card-top">
        <div className="customer-info">
          {conversation.unread && <span className="unread-dot" />}
          <span className="customer-name">{conversation.customerName}</span>
        </div>
        <span className="card-time">{formatTime(conversation.createdAt)}</span>
      </div>

      <div className="card-middle">
        <h4 className="card-subject">{conversation.subject}</h4>
        <p className="card-last-message">{conversation.lastMessage}</p>
      </div>

      <div className="card-bottom">
        <div className="card-badges">
          <span className={`badge badge-priority-${conversation.priority.toLowerCase()}`}>
            {conversation.priority}
          </span>
          <span className={`badge badge-status-${conversation.status.toLowerCase()}`}>
            {conversation.status}
          </span>
          <span className="channel-badge">
            <span className="channel-icon">{getChannelIcon(conversation.channel)}</span>
            <span className="channel-name">{conversation.channel}</span>
          </span>
        </div>
        
        {conversation.slaRemaining !== undefined && (
          <span className={`sla-badge ${conversation.slaRemaining < 30 ? "sla-urgent" : ""}`}>
            ⏱️ {conversation.slaRemaining}m
          </span>
        )}
      </div>
    </div>
  );
};

export default ConversationCard;
