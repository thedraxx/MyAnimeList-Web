import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { AnimeFavsProvider, FetchContext } from './context/FetchContext';

document.body.style.backgroundColor = '#000000'

const AppState = ({ children }: any) => {
  return <AnimeFavsProvider>{children}</AnimeFavsProvider>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <Navbar />
        <App />
      </AppState>
    </BrowserRouter>
  </React.StrictMode>,
)

