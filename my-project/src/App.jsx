import { useState } from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CallDetails from './components/callDetails/CallDetails'

function App() {
  const baseURL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/'

  return (
   <div>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} baseURL={baseURL}/>
      <Route path='/callDetails/:id' element={<CallDetails/>} baseURL={baseURL}/>
    </Routes>
    </Router>
   </div>
  )
}

export default App
