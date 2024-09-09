//src/ActionProvider.jsx
import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.api_key = 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;
  }

  sendMessageToAPI = async (message) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        { inputs: message },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = response.data[0]?.generated_text || "No response from the bot";
      console.log(response.data);
  
      const botMessageObject = this.createChatBotMessage(botMessage);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessageObject],
      }));
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = this.createChatBotMessage("Error: Unable to get a response from the AI");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  };
  
  handleUserMessage = (message) => {
    const userMessage = this.createChatBotMessage(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages],
    }));

    this.sendMessageToAPI(message);
  };
}

export default ActionProvider;