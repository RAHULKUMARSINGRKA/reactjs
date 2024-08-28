import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './componts/Header'
import Footer from './componts/Footer'
import ContactUs from './componts/ContactUs'
import Home from './componts/Home'
import Loop from './componts/Loop'
import Plans from './componts/Plans'
import Services from './componts/Services'
   import About from './componts/About'


function App() {
  return (
    <div> 
 
     
    
   

   
     <BrowserRouter>
     <Header />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path='/Services' element={<Services />}></Route>
      <Route path="/About" element={<About />} />
     </Routes>
     
     
     
        <Footer />
     </BrowserRouter>
    
    
    </div>
  )
}

export default App