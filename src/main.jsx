import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='bg-[#f5f5f5] h-screen w-screen'>
  <App />
  </div>
  </BrowserRouter>
)
