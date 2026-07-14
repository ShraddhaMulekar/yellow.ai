import { useState } from "react";
import { useConversations } from "./hooks/useConversations";

import ConversationList from "./components/conversation/ConversationList";
// import type { Conversation } from "./types/conversation";
import ConversationDetails from "./components/conversation/ConversationDetails";
import SearchBar from "./components/filters/SearchBar";
import FilterBar from "./components/filters/FilterBar";
import type { PriorityFilter, StatusFilter } from "./types/filter";

function App() {
  const { data, isLoading, error } = useConversations();
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const filteredConversations = (data ?? []).filter((conversation) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      conversation.customerName.toLowerCase().includes(search) ||
      conversation.subject.toLowerCase().includes(search) ||
      conversation.customerEmail.toLowerCase().includes(search);

    const matchesPriority =
      priorityFilter === "All" || conversation.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "All" || conversation.status === statusFilter;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  const selectedConversation =
    filteredConversations.find(
      (conversation) => conversation.id === selectedConversationId,
    ) ?? null;

  console.log(data);

  return (
    <>
      <h1>Conversation Inbox</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <FilterBar
        priority={priorityFilter}
        status={statusFilter}
        onPriorityChange={setPriorityFilter}
        onStatusChange={setStatusFilter}
      />

      <ConversationList
        conversations={filteredConversations}
        onSelect={(conversation) => setSelectedConversationId(conversation.id)}
      />

      <hr />

      <ConversationDetails conversation={selectedConversation} />
    </>
  );
}

export default App;
