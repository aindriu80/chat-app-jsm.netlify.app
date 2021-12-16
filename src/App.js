import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
require('dotenv').config()

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_projectID}
      userName={process.env.REACT_APP_userName}
      userSecret={process.env.REACT_APP_userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
