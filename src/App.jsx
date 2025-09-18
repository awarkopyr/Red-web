import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Camera from './pages/Camera.jsx'
import PhotoGallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx' 
import Navbar from './components/Nav.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <div>

        <Navbar />
        <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/home" element = { <Home /> } />
        
        <Route path = "/camera" element = { <Camera /> } />
        <Route path = "/gallery" element = { <PhotoGallery /> } />
        <Route path = "/contact" element = { <Contact /> } />
        </Routes>
        
      </div>
    </>
  )
}

export default App
