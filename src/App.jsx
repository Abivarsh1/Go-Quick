import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
      </Routes>

      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
