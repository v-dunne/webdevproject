import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parse from 'parse'
import environment from './environments.js'
import './index.css'
import App from './App.jsx'

Parse.initialize(environment.APPLICATION_ID, environment.JAVASCRIPT_KEY)
Parse.serverURL = environment.SERVER_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
