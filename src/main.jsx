import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
