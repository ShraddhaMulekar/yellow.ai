import { useEffect, useState } from "react";
import { getConversations } from "./api/conversationApi";
import type { Conversation } from "./types/conversation";

export default function FeatureTester() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // States for search and filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedSentiment, setSelectedSentiment] = useState<string>("All");
  const [selectedChannel, setSelectedChannel] = useState<string>("All");

  // Selection & Interactivity states
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>("");

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getConversations();
        setConversations(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // 1. Filter and Search Logic
  const filteredConversations = conversations.filter((c) => {
    const matchesSearch =
      c.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority = selectedPriority === "All" || c.priority === selectedPriority;
    const matchesStatus = selectedStatus === "All" || c.status === selectedStatus;
    const matchesSentiment = selectedSentiment === "All" || c.sentiment === selectedSentiment;
    const matchesChannel = selectedChannel === "All" || c.channel === selectedChannel;

    return matchesSearch && matchesPriority && matchesStatus && matchesSentiment && matchesChannel;
  });

  const selectedConversation = conversations.find((c) => c.id === selectedId);

  // 2. Mock Actions
  const handleUpdateStatus = (id: string, newStatus: Conversation["status"]) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus, updatedAt: new Date().toISOString() } : c))
    );
  };

  const handleUpdatePriority = (id: string, newPriority: Conversation["priority"]) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, priority: newPriority, updatedAt: new Date().toISOString() } : c))
    );
  };

  const handleAssignAgent = (id: string, agentName: string | null) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, assignedTo: agentName, updatedAt: new Date().toISOString() } : c))
    );
  };

  const handleSendReply = (id: string) => {
    if (!replyText.trim()) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              lastMessage: replyText,
              unread: false,
              updatedAt: new Date().toISOString(),
            }
          : c
      )
    );
    setReplyText("");
    alert("Reply simulated! Updated the 'lastMessage' property of this conversation.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Conversation Inbox - Feature Tester</h1>
      <p>This is a plain-HTML sandbox to check each required feature one by one without any CSS formatting.</p>

      <hr />

      {/* FEATURE 1: Fetching Status */}
      <section>
        <h2>Feature 1: Data Fetching</h2>
        {loading && <p>Loading conversations from API (MSW)...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && (
          <p style={{ color: "green" }}>Successfully loaded {conversations.length} conversations!</p>
        )}
      </section>

      <hr />

      {/* FEATURE 2: Searching and Filtering */}
      <section>
        <h2>Feature 2: Searching & Filtering</h2>
        
        <div>
          <label>Search Name/Email/Subject: </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type search query..."
          />
        </div>
        <br />

        <div>
          <label>Filter by Priority: </label>
          <select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {" | "}

          <label>Filter by Status: </label>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="Assigned">Assigned</option>
            <option value="Resolved">Resolved</option>
          </select>

          {" | "}

          <label>Filter by Sentiment: </label>
          <select value={selectedSentiment} onChange={(e) => setSelectedSentiment(e.target.value)}>
            <option value="All">All</option>
            <option value="Positive">Positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Negative">Negative</option>
          </select>

          {" | "}

          <label>Filter by Channel: </label>
          <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
            <option value="All">All</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
            <option value="Chat">Chat</option>
          </select>
        </div>

        <p>Showing {filteredConversations.length} of {conversations.length} conversations</p>
      </section>

      <hr />

      {/* FEATURE 3: Conversation List & Selection */}
      <section>
        <h2>Feature 3: Conversation List</h2>
        <table border={1} cellPadding={5} style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Subject</th>
              <th>Channel</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Sentiment</th>
              <th>Assigned To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredConversations.map((c) => (
              <tr key={c.id} style={{ backgroundColor: selectedId === c.id ? "#e0f7fa" : "transparent" }}>
                <td>{c.id}</td>
                <td>
                  <strong>{c.customerName}</strong>
                  <br />
                  <small>{c.customerEmail}</small>
                </td>
                <td>
                  {c.unread && <span style={{ color: "blue", fontWeight: "bold" }}>[Unread] </span>}
                  {c.subject}
                </td>
                <td>{c.channel}</td>
                <td>{c.priority}</td>
                <td>{c.status}</td>
                <td>{c.sentiment} (Conf: {c.aiConfidence}%)</td>
                <td>{c.assignedTo || "Unassigned"}</td>
                <td>
                  <button onClick={() => setSelectedId(c.id)}>Select to View / Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr />

      {/* FEATURE 4: Detail View & Updating State */}
      <section>
        <h2>Feature 4: Selected Conversation Detail & Actions</h2>
        {selectedConversation ? (
          <div style={{ border: "2px solid #333", padding: "15px" }}>
            <h3>Customer: {selectedConversation.customerName} (ID: {selectedConversation.id})</h3>
            <p><strong>Email:</strong> {selectedConversation.customerEmail} | <strong>Phone:</strong> {selectedConversation.customerPhone}</p>
            <p><strong>Subject:</strong> {selectedConversation.subject}</p>
            <p><strong>AI Summary:</strong> {selectedConversation.summary}</p>
            <p><strong>Last Message:</strong> <em>"{selectedConversation.lastMessage}"</em></p>
            <p><strong>SLA Remaining:</strong> {selectedConversation.slaRemaining} hrs | <strong>Waiting Time:</strong> {selectedConversation.waitingTime} mins</p>
            
            <hr />

            {/* Interactivity: Update Status */}
            <div>
              <strong>Update Status: </strong>
              <button onClick={() => handleUpdateStatus(selectedConversation.id, "Open")}>Set Open</button>{" "}
              <button onClick={() => handleUpdateStatus(selectedConversation.id, "Assigned")}>Set Assigned</button>{" "}
              <button onClick={() => handleUpdateStatus(selectedConversation.id, "Resolved")}>Set Resolved</button>
            </div>
            <br />

            {/* Interactivity: Update Priority */}
            <div>
              <strong>Update Priority: </strong>
              <button onClick={() => handleUpdatePriority(selectedConversation.id, "Low")}>Set Low</button>{" "}
              <button onClick={() => handleUpdatePriority(selectedConversation.id, "Medium")}>Set Medium</button>{" "}
              <button onClick={() => handleUpdatePriority(selectedConversation.id, "High")}>Set High</button>
            </div>
            <br />

            {/* Interactivity: Assign Agent */}
            <div>
              <strong>Assign to Agent: </strong>
              <button onClick={() => handleAssignAgent(selectedConversation.id, "Shraddha")}>Assign to Shraddha</button>{" "}
              <button onClick={() => handleAssignAgent(selectedConversation.id, "Alex")}>Assign to Alex</button>{" "}
              <button onClick={() => handleAssignAgent(selectedConversation.id, null)}>Unassign</button>
            </div>
            <br />

            {/* Interactivity: Reply */}
            <div>
              <strong>Draft Reply:</strong>
              <br />
              <textarea
                rows={3}
                cols={50}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type reply message here..."
              />
              <br />
              <button onClick={() => handleSendReply(selectedConversation.id)}>Send Mock Reply</button>
            </div>
          </div>
        ) : (
          <p>Please select a conversation from the list above to view its details and perform actions.</p>
        )}
      </section>
    </div>
  );
}
