import { useState } from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CallDetails from './components/callDetails/CallDetails'
import Keypad from './pages/keypad/Keypad'
import ArchivedCalls from './pages/archivedCalls/ArchivedCalls'
import Footer from './components/footer/Footer'

function App() {
  const baseURL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/'

  return (
   <div>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} baseURL={baseURL}/>
      <Route path='/callDetails/:id' element={<CallDetails/>} baseURL={baseURL}/>
      <Route path='/keypad' element={<Keypad/>}/>
      <Route path='/archivedCalls' element={<ArchivedCalls/>}/>
    </Routes>
    <Footer/>
    </Router>
   </div>
  )
}

export default App
