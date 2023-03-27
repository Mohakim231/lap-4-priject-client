import React, { useState, useEffect } from "react";
import Conversation from "../../Components/Conversation";

function Message() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  async function getConversationsByUser(userId) {
    const response = await fetch(`http://localhost:5000/conversations?user_id=${userId}`);
    const data = await response.json();
    setConversations(data.conversations);
  }

  useEffect(() => {
    // getConversationsByUser(user.id);
    getConversationsByUser(1);
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      {conversations.map((conversation) => (
        <div
          className='conversation-box'
          key={conversation.conversation.id}
          onClick={() => setSelectedConversation(conversation.conversation.id)}
        >
          <p>User: {conversation.user.username}</p>
          <p>Service: {conversation.service.username}</p>
        </div>
      ))}
      {selectedConversation && (
        <div id='messages'>
          <Conversation conversationId={selectedConversation} />
        </div>
      )}
    </div>
  );
}

export default Message;
