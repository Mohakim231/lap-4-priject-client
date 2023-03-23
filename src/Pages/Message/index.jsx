import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // replace with your server URL

const MessagePopup = ({ customerID, serviceProviderID }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    socket.emit("join", { customerID, serviceProviderID });

    socket.on("message", (data) => {
      setConversation([...conversation, data]);
    });

    return () => {
      socket.emit("leave", { customerID, serviceProviderID });
      socket.off();
    };
  }, []);

  const sendMessage = () => {
    const data = { customerID, serviceProviderID, message };
    socket.emit("sendMessage", data);
    setConversation([...conversation, data]);
    setMessage("");
  };

  return (
    <div className="message-popup">
      <div className="header">Chat with Service Provider</div>
      <div className="conversation">
        {conversation.map((msg, idx) => (
          <div key={idx}>
            <span>{msg.customerID === customerID ? "You: " : "SP: "}</span>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessagePopup;
