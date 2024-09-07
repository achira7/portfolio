import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "AchiraBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello! I'm ${botName}, and I'm here to answer any questions you have about Achira's skills, projects, and experience.`)
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1F2937",
    },
    chatButton: {
      backgroundColor: "#1F2937",
    },
  },
};

export default config;
