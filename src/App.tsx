import { useState } from "react";
import { useConversations } from "./hooks/useConversations";

import ConversationList from "./components/conversation/ConversationList";
// import type { Conversation } from "./types/conversation";
import ConversationDetails from "./components/conversation/ConversationDetails";
import SearchBar from "./components/filters/SearchBar";
import FilterBar from "./components/filters/FilterBar";
import type { PriorityFilter, StatusFilter } from "./types/filter";
import type { SortOption } from "./types/sort";
import SortDropdown from "./components/filters/SortDropdown";
import ErrorState from "./common/Error";

function App() {
  const { data, isLoading, error, refetch } = useConversations();
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortOption, setSortOption] = useState<SortOption>("Newest");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
  return (
    <ErrorState
      title="Unable to load conversations"
      description="Something went wrong while fetching conversations."
      onRetry={refetch}
    />
  );
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

  const sortedConversations = [...filteredConversations].sort((a, b) => {
    switch (sortOption) {
      case "Newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case "Oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

      case "Priority": {
        const priorityOrder = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }

      case "SLA":
        return a.slaRemaining - b.slaRemaining;

      default:
        return 0;
    }
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

      <SortDropdown 
        sort={sortOption} 
        onSortChange={setSortOption} 
      />

      <ConversationList
        conversations={sortedConversations}
        onSelect={(conversation) => setSelectedConversationId(conversation.id)}
      />

      <hr />

      <ConversationDetails conversation={selectedConversation} />
    </>
  );
}

export default App;
