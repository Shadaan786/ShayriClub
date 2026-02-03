import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Kalam from './pages/kalam.jsx'
// import { ContextProvider } from './pages/LikeContext.jsx'
import { ContextProvider } from './ContextProvider.jsx'

import '@shoelace-style/shoelace/dist/shoelace.js'
import '@shoelace-style/shoelace/dist/themes/light.css'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import { SocialContextProvider } from './pages/Contexts/SocketContext.jsx'

import Button from 'react-bootstrap/Button';

setBasePath('/shoelace')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialContextProvider>
    <ContextProvider>
  
    <App />

    </ContextProvider>
    </SocialContextProvider>
    
  </StrictMode>,
)
