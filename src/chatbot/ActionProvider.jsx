// src/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBotResponse = (response) => {
    // Create a message using the response
    const message = this.createChatBotMessage(response);

    // Add the new message to the chatbot's state
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
