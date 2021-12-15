import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
require('dotenv').config()

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_projectID}
      userName={process.env.REACT_APP_userName}
      userSecret={process.env.REACT_APP_userSecret}
    />
  )
}

export default App
