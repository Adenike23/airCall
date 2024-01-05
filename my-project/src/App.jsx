import { useState } from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const baseURL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/'

  return (
   <div>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} baseURL={baseURL}/>
    </Routes>
    </Router>
   </div>
  )
}

export default App
