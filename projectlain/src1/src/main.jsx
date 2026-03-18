//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './normalize.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*Strict Mode adalah mode dalam development mode yang tidak akan di build pada saat proses deployment.
    Strict Mode akan membuat setiap component dijalankan 2 kali, feature non-idempotent untuk membantu developer identify bugs dalam proses development.
    Ini tidak akan mempengaruhi development
  */
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
