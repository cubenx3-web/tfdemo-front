import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PopMsgContext from './context/PopMsgContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      
      <PopMsgContext>
          <App />
      </PopMsgContext>
        
       

    </BrowserRouter>

  </StrictMode>,
)
