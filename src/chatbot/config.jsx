import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("Hi! Ask me anything about Achira.")],
  botName: "AchiraBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  customComponents: {
    // Custom component for user messages
    userMessage: (props) => (
      <div className="font-space text-2xl">{props.message.message}</div>
    ),
  },
};

export default config;
