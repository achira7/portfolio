import React from 'react'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'


const ChatBot = () => {
  return (
    <div className="flex items-center bg-card-primary-top z-10 m-10">
      <Chatbot
        config={config} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser} 
      />
    </div>
  )
}

export default ChatBot