import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Silence THREE.Clock deprecation noise from @react-three/fiber (still uses Clock internally)
// and React DevTools hint in dev — keep console clean without hiding real errors
if (typeof window !== 'undefined') {
  const _warn = console.warn.bind(console)
  console.warn = (...args) => {
    const msg = typeof args[0] === 'string' ? args[0] : ''
    if (msg.includes('THREE.Clock') || msg.includes('Download the React DevTools')) return
    _warn(...args)
  }
}

createRoot(document.getElementById('root')).render(
 <StrictMode>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </StrictMode>,
)
