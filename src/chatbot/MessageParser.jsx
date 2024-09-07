// src/MessageParser.js
import axios from 'axios';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async parse(message) {
    const lowercaseMessage = message.toLowerCase();
  
    // Provide a detailed context about Achira Silva
    const context = `
      Achira Silva is a Software Engineer with expertise in React, Django, ASP.NET, and Unity 2D. 
      They have worked on a variety of projects, including a Unity 2D Pixel Art game and portfolio website 
      integrating AI chatbots with React and Tailwind. Achira is proficient in web development, game design, 
      and building AI systems.

      His personal interests are making music, game dev, playing retro games. He has made some unity 2d games and published music to YouTube.

      He studied at Informatics Institute of Technology (IIT) and studied "Business Information Systems" degree.
    `;
  
    // API request to Hugging Face's text-generation model
    try {
      const apiResponse = await axios.post(
         'https://api-inference.huggingface.co/models/google-bert/bert-base-uncased',
        //'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2/',
        {
          inputs: `${context}\nUser: ${message}`,  
        },
        {
          headers: {
            'Authorization': `Bearer {API_KEY}`,
          },
        }
      );
  
      const botResponse = apiResponse.data.generated_text;
  
      if (botResponse && botResponse.trim() !== "") {
        this.actionProvider.handleBotResponse(botResponse);
      } else {
        this.actionProvider.handleBotResponse("Sorry, I couldn’t find the answer to that question.");
      }
    } catch (error) {
      console.error("Error fetching data from Hugging Face API:", error);
      this.actionProvider.handleBotResponse("I'm having trouble reaching the AI service right now. Please try again later.");
    }
  }
}

export default MessageParser;
