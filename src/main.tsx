import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance optimizations
if (process.env.NODE_ENV === 'production') {
  // Disable console logs in production
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
