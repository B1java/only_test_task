import { createRoot } from 'react-dom/client'
import React from 'react'
import './styles/styles.scss'
import App from './components/App'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)