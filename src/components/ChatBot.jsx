import React from 'react'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'


const ChatBot = () => {
  return (
    <div className="bg-background z-10  ">
      This is the chatbot
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatBot