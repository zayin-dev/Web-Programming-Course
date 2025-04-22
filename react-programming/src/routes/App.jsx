import React from "react";
import { createRoot } from 'react-dom/client'
import '../App.css';
import App from './Routes-Example'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)