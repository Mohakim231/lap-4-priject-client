import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Message({ customerID, serviceProviderID }) {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    socket.emit("join", { customerID, serviceProviderID });

    socket.on(
      "message",
      (data) => {
        setConversation([...conversation, data]);
      },
      3000
    );

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
  // socket.timeout(5000).emit("hello", "world", (err, response) => {
  //   if (err) {
  //   } else {
  //     console.log(response);
  //   }
  // });

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
}
