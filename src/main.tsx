import React from 'react'
import ReactDOM from 'react-dom/client'
import { KeyboardControls } from './components/Providers/KeyboardControls.tsx'
import App from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeyboardControls>
      <App />
    </KeyboardControls>
  </React.StrictMode>
)
