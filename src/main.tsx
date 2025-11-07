import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faGlobe, faHeart, faUserPen, faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

library.add(faEnvelope, faPhone, faGlobe, faHeart, faUserPen, faTrash, faHeartRegular, faX)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
