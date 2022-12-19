import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

document.body.style.backgroundColor = '#000000'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
