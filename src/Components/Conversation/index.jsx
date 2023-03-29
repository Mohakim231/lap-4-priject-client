import React, { useState, useEffect } from "react";
import { useAuth } from "../../context";

function Conversation(props) {
  const { user_id } = useAuth()
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  async function getMessages(conversationId) {
    const response = await fetch(`http://localhost:5000/conversations/${conversationId}/messages`);
    const data = await response.json();
    setMessages(data.messages);
  }

  useEffect(() => {
    getMessages(props.conversationId);
  }, [props.conversationId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/conversations/${props.conversationId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sender_id: user_id,
        content: newMessage
      })
    });
    setNewMessage("");
    getMessages(props.conversationId);
  }

  return (
    <div className="messages-box-navbar">
      {messages.map((message) => (
        <div className='message-box' key={message.id}>
          <p>{message.sender}</p>
          <p>{message.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          New message:
          <input type="text" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Conversation;