import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google"
import App from './App.jsx'

// 🔥 paste your Google CLIENT ID here
const REACT_APP_GOOGLE_CLIENT_ID = "3873832878-6ibhfjrt8ej9861t9ictm1pc9j3g3dl0.apps.googleusercontent.com"
const REACT_APP_GOOGLE_CLIENT_SECRET = "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"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID} clientSecret={REACT_APP_GOOGLE_CLIENT_SECRET}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
