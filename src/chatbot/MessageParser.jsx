// src/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // Handle the user's message and trigger the action to send it to the API
    this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
