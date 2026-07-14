import { useEffect } from "react";
import { getConversations } from "./api/conversationApi";

function App() {
  useEffect(() => {
    async function fetchData() {
      const data = await getConversations();
      console.log(data);
    }

    fetchData();
  }, []);

  return <h1>Conversation Inbox</h1>;
}

export default App;