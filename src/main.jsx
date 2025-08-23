import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './shared/header'
import { Footer } from './shared/footer'
import './styles/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppRoutes } from './routes/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Header />
      <AppRoutes />
    <Footer />
  </React.StrictMode>,
)
