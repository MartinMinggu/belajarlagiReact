import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/normalize.css';
import { CinemaProvider } from './providers/CinemaContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CinemaProvider>
      <App />
    </CinemaProvider>
  </StrictMode>,
)
