import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

const basename = import.meta.env.PROD ? "/admin" : "/";

createRoot(document.getElementById('root')).render(
<BrowserRouter basename={basename}>
    <App />
</BrowserRouter>
)
