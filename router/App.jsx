import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'

const App = () => {
  return (
    <>
    <Router>
    <Navbar />  
    {/* navbar doesnot change in every page. so we kept above Routes */}
    {/* lets check it from facebook page itself */}
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
       <Route path='/*' element={<Error />} />

      </Routes>

    </Router>
    </> 
  )
}

export default App 