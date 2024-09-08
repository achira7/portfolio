// src/Chat.js
import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // API call to Hugging Face Blenderbot
  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        { inputs: input },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );
      const botMessage = {
        text: response.data.generated_text,
        sender: "bot",
      };
      console.log(response.data)
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...messages,
        { text: "Error: Unable to get a response", sender: "bot" },
      ]);
    }

    setInput(""); 
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 max-w-xs rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center p-2 border-t border-gray-300">
          <input
            type="text"
            className="flex-grow p-2 border rounded-md focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded-md ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
