import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      'Project-ID': process.env.REACT_APP_projectID,
      'User-Name': process.env.REACT_APP_userName,
      'User-Secret': process.env.REACT_APP_userSecret,
    }

    try {
      // username & password => ask chatengine to give messages
      await axios.get('https://api.chatengine.io/chats', {
        // if sucessfull we are logged in
        headers: authObject,
      })
      localStorage.setItem('userName', userName)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (error) {
      // error -> please try with username
      setError('Ooops, incorrect credentials.')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error"></h2>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
