import { useConversations } from "./hooks/useConversations";
import ConversationList from "./components/conversation/ConversationList";

function App() {
  const {data, isLoading, error} = useConversations();

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
      />
    </>
  );
}

export default App;