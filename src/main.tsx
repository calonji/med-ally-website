import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // tailwind base styles
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="relative w-full overflow-x-hidden">
      <App />
    </div>
  </React.StrictMode>
)
