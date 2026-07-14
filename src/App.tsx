import { useConversations } from "./hooks/useConversations";

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
      <p>Total Conversations: {data?.length}</p>
    </>
  );
}

export default App;