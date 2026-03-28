import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import SellOnDaraz from './pages/SellOnDaraz.jsx'
import HelpAndSupport from './pages/HelpAndSupport.jsx'
import LearningPage from './pages/LearningPage.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
      
      <Routes>
      
        <Route path='/' element={<App />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/sellondaraz' element={<SellOnDaraz />} />
        <Route path='/helpcenter' element={<HelpAndSupport />} />
        <Route path='/helpcenter/faq' element={<LearningPage />} />
      
      </Routes>
    
    </BrowserRouter>

  </StrictMode>

)
