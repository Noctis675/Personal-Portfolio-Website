import React from 'react'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/home/Contact'

import Home from './components/home/Home'
import Navbar from './components/home/Navbar'

import Services from './components/home/Services'
import Skills from './components/home/Skills'
import './App.css'


const App = () => {
  return (
    <>
  <Navbar/>
    <Home/>
    <About/>
<Skills/>
<Services/>
<Contact/>






  
    
    </>
  )
}

export default App
