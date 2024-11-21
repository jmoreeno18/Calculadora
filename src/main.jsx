import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppCalculadora} from './AppCalculadora' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCalculadora />
  </StrictMode>,
)
