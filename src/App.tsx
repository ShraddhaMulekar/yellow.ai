import { useState } from "react";
import { useConversations } from "./hooks/useConversations";

import ConversationList from "./components/conversation/ConversationList";
import type { Conversation } from "./types/conversation";
import ConversationDetails from "./components/conversation/ConversationDetails";

function App() {
  const {data, isLoading, error} = useConversations();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  console.log(data)

  return(
    <>
      <h1>Conversation Inbox</h1>
      
      <ConversationList
        conversations = {data ?? []}
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