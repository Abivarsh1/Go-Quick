import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
