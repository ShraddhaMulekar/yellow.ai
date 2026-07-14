export interface Conversation {
  id: string;

  customerName: string;
  customerEmail: string;
  customerPhone: string;
  avatar: string;

  subject: string;
  summary: string;
  lastMessage: string;

  priority: "High" | "Medium" | "Low";

  status: "Open" | "Assigned" | "Resolved";

  sentiment: "Positive" | "Neutral" | "Negative";

  channel: "WhatsApp" | "Email" | "Chat";

  aiConfidence: number;

  unread: boolean;

  waitingTime: number;

  slaRemaining: number;

  assignedTo: string | null;

  createdAt: string;
  updatedAt: string;
}