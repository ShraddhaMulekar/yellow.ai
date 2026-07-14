import type { Conversation } from "../../../types/conversation";
import ActionButtons from "../ActionButtons";

interface ConversationDetailsProps {
  conversation: Conversation | null;
}

const ConversationDetails = ({ conversation }: ConversationDetailsProps) => {
  if (!conversation) {
    return (
      <div className="details-empty-state">
        <div className="empty-icon">💬</div>
        <h2>No Conversation Selected</h2>
        <p>Select an item from the inbox list to view its summary, details, and take action.</p>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "😊";
      case "Negative":
        return "😞";
      default:
        return "😐";
    }
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <div className="profile-section">
          <div className="avatar-circle">{getInitials(conversation.customerName)}</div>
          <div className="profile-info">
            <h2>{conversation.customerName}</h2>
            <div className="contact-details">
              <span>📧 {conversation.customerEmail}</span>
              {conversation.customerPhone && <span>📞 {conversation.customerPhone}</span>}
            </div>
          </div>
        </div>

        <div className="details-badges">
          <span className={`badge badge-priority-${conversation.priority.toLowerCase()}`}>
            {conversation.priority} Priority
          </span>
          <span className={`badge badge-status-${conversation.status.toLowerCase()}`}>
            {conversation.status}
          </span>
        </div>
      </div>

      <div className="details-body">
        <div className="info-section">
          <h3 className="section-title">Subject</h3>
          <p className="subject-content">{conversation.subject}</p>
        </div>

        <div className="info-section summary-box">
          <h3 className="section-title">✨ AI Summary</h3>
          <p className="summary-content">{conversation.summary}</p>
        </div>

        <div className="info-section chat-box">
          <h3 className="section-title">Last Message</h3>
          <div className="chat-bubble">
            <p className="message-content">{conversation.lastMessage}</p>
            <span className="message-time">
              {new Date(conversation.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>

        <div className="meta-grid">
          <div className="meta-card">
            <span className="meta-label">Sentiment</span>
            <span className={`meta-value sentiment-${conversation.sentiment.toLowerCase()}`}>
              {getSentimentEmoji(conversation.sentiment)} {conversation.sentiment}
            </span>
          </div>
          <div className="meta-card">
            <span className="meta-label">AI Confidence</span>
            <span className="meta-value font-bold">{conversation.aiConfidence}%</span>
          </div>
          <div className="meta-card">
            <span className="meta-label">Channel</span>
            <span className="meta-value">{conversation.channel}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label">Assigned To</span>
            <span className="meta-value assignee-name">
              👤 {conversation.assignedTo ?? "Unassigned"}
            </span>
          </div>
        </div>
      </div>

      <div className="details-actions">
        <ActionButtons
          id={conversation.id}
          assignedTo={conversation.assignedTo}
          status={conversation.status}
        />
      </div>
    </div>
  );
};

export default ConversationDetails;
