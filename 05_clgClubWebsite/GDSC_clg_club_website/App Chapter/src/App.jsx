
import './App.css'
import About from './Components/About'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Opportunities from './Components/Opportunities'
import Vision from './Components/Vision'

import React from 'react';

function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <Vision />
      <Opportunities />
      <About />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App
