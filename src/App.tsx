import { useState } from "react";
import { useConversations } from "./hooks/useConversations";

import ConversationList from "./components/conversation/ConversationList";
import type { Conversation } from "./types/conversation";
import ConversationDetails from "./components/conversation/ConversationDetails";
import SearchBar from "./components/filters/SearchBar";

function App() {
  const {data, isLoading, error} = useConversations();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const filteredConversations = (data ?? []).filter((conversation)=>{
    const search = searchTerm.toLowerCase();

    return(
      conversation.customerName.toLowerCase().includes(search) ||
      conversation.subject.toLowerCase().includes(search) ||
      conversation.customerEmail.toLowerCase().includes(search)
    )
  })

  console.log(data)

  return(
    <>
      <h1>Conversation Inbox</h1>

      <SearchBar
        searchTerm = {searchTerm}
        onSearchChange = {setSearchTerm}
      />
      
      <ConversationList
        conversations = {filteredConversations}
        onSelect = {setSelectedConversation}
      />

      <hr />

      <ConversationDetails
        conversation = {selectedConversation}
      />
    </>
  );
}

export default App;