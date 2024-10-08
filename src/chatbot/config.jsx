import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("This feature is currently under construction. Results might be inaccurate.")],
  botName: "AchiraBot",
  customComponents: {
    userMessage: (props) => (
      <div className="bg-green-500 text-white p-2 rounded-lg">
        {props.message.message}
      </div>
    ),
    botMessage: (props) => (
      <div className="bg-blue-500 text-white p-2 rounded-lg w-[800px]">
        {props.message.message}
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      height: '400px',
      width: '850px',
    },
  },
  
};

export default config;
